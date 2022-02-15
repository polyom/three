import { Shape, Vector } from "@polyom/engine";
import { Group } from "three";
import { Cube } from "./Cube";
import { Frame } from "./Frame";
import { Piece } from "./Piece";

export class Board extends Group {
	cursor?: Piece;
	queue: Piece[] = [];
	held?: Piece;
	frame: Frame;
	stack: Cube[][];
	printLocations: Vector[] = [];

	constructor(public width: number, public height: number) {
		super();
		this.stack = Array(height)
			.fill(null)
			.map(() => Array(width).fill(null));
		this.frame = new Frame(width, height);
		this.add(this.frame);
	}

	updateQueuePosition() {
		this.queue.forEach((piece, i) => {
			piece.set(this.width + 2, -i * 4, 0);
		});
	}

	push(shape: Shape, ox: number, oy: number) {
		const piece = new Piece(shape, ox, oy);
		const i = this.queue.push(piece);
		piece.set(this.width + 2, -i * 4, 0, true);

		this.add(piece);
		this.updateQueuePosition();
	}

	print(x: number, y: number) {
		this.printLocations.push([x, y]);
	}

	lock(lines: number[]) {
		this.cursor?.cubes.forEach((cube, i) => {
			this.add(cube);
			const [x, y] = this.printLocations[i];
			cube.set(x, this.cursor!.position.y - this.cursor!.y - y, true);
			cube.set(x, -y);
			this.stack[y][x] = cube;
		});
		this.printLocations = [];
		this.clearLines(lines);
	}

	spawn(x: number, y: number, angle: number) {
		this.cursor = this.queue.shift()!;
		this.updateQueuePosition();
		this.cursor.set(x, y, angle);
	}

	swap(x: number, y: number) {
		const held = this.held;
		this.held = this.cursor;
		this.cursor = held;
		this.held!.set(-4, 0, 0);
		this.cursor?.set(x, y, 0);
	}

	clearLines(lines: number[]) {
		for (const line of lines) {
			console.log(this.stack[line]);
			for (const cube of this.stack[line]) {
				cube.removeFromParent();
			}
			this.stack.splice(line, 1);
			this.stack.unshift(Array(this.width).fill(null));
		}
		this.updateStackPosition();
	}

	updateStackPosition() {
		this.stack.forEach((row, i) => {
			for (const cube of row) {
				cube?.set(cube.x, -i);
			}
		});
	}
}
