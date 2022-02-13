import { Shape } from "@polyom/engine";
import { Group } from "three";
import { Cube } from "./Cube";

export class Piece extends Group {
	cubes: Cube[] = [];
	pivot = new Group();
	offset = new Group();
	offset2 = new Group();

	x = 0;
	y = 0;
	d = 0;
	speed = 0.6;

	constructor(shape: Shape, ox: number, oy: number) {
		super();

		this.offset.position.set(-ox, oy, 0);
		this.offset2.position.set(ox, -oy, 0);
		this.cubes = shape.map(([x, y]) => {
			const cube = new Cube();
			cube.set(x, -y, true);
			return cube;
		});

		this.add(this.offset);
		this.offset.add(this.pivot);
		this.pivot.add(this.offset2);
		this.offset2.add(...this.cubes);
	}

	set(x: number, y: number, d: number, instant = false) {
		this.x = x;
		this.y = y;
		this.d = d;
		if (instant) {
			this.position.set(x, y, 0);
			this.pivot.rotation.set(0, 0, (-d * Math.PI) / 2);
		}
	}

	update() {
		this.translateX((this.x - this.position.x) * this.speed);
		this.translateY((this.y - this.position.y) * this.speed);
		this.pivot.rotation.z +=
			((-this.d * Math.PI) / 2 - this.pivot.rotation.z) * this.speed;
	}
}
