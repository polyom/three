import {
	Engine,
	Controller,
	State,
	paramsFromJson,
	Random,
} from "@polyom/engine";
import { Client } from "../src/Client";
import { Board } from "../src/entities/Board";
import { tetromino } from "./tetromino";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const state = new State(
	...paramsFromJson(tetromino),
	new Random(1, 2, 3, 4),
	10
);
const engine = new Engine(state, 500);
const client = new Client();

new OrbitControls(client.camera, client.renderer.domElement);

document.body.appendChild(client.renderer.domElement);

const board = new Board(engine.state.width, engine.state.height);

client.scene.add(board);

client.camera.translateZ(30);

engine.on("move", ([x, y, angle], ok) => {
	if (ok && board.cursor) {
		board.cursor.set(x, -y, angle, false);
	}
});

engine.on("spawn", (_, ok) => {
	if (!ok) return;
	const { x, y, angle } = engine.state;
	board.spawn(x, y, angle);
});

engine.on("lock", (_, lines) => {
	board.lock(lines);
});

engine.on("push", ([i]) => {
	const [x, y] = engine.state.getPiece(i).size;
	board.push(engine.state.getShape(i, 0), -(x - 1) / 2, -(y - 1) / 2);
});

engine.on("swap", (_, ok) => {
	if (ok) board.swap();
});

engine.on("print", ([x, y, id]) => {
	board.print(x, y);
});

engine.start();
engine.state.spawn();

const controller = new Controller(engine, {
	das: 150,
	arr: 20,
	dcd: 6,
	crt: true,
	sdf: 10,
});

window.onkeydown = ({ key }) => {
	switch (key) {
		case "ArrowLeft":
			return controller.startSlideLeft();
		case "ArrowRight":
			return controller.startSlideRight();
		case "c":
			return controller.startHold();
		case " ":
			return controller.startHardDrop();
		case "z":
			return controller.startRotateLeft();
		case "ArrowUp":
		case "x":
			return controller.startRotateRight();
		case "ArrowDown":
			return controller.startSoftDrop();
	}
};

window.onkeyup = ({ key }) => {
	switch (key) {
		case "ArrowLeft":
			return controller.stopSlideLeft();
		case "ArrowRight":
			return controller.stopSlideRight();
		case "ArrowDown":
			return controller.stopSoftDrop();
		case "z":
			return controller.stopRotateLeft();
		case "ArrowUp":
		case "x":
			return controller.stopRotateRight();
		case "c":
			return controller.stopHold();
		case " ":
			return controller.stopHardDrop();
	}
};
