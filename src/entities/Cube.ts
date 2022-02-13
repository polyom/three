import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const size = 0.7;

export class Cube extends Mesh {
	x = 0;
	y = 0;
	speed = 0.6;
	constructor() {
		const geometry = new BoxGeometry(size, size, size);
		const material = new MeshBasicMaterial({ wireframe: true });
		super(geometry, material);
	}

	set(x: number, y: number, instant = false) {
		this.x = x;
		this.y = y;
		if (instant) {
			this.position.set(x, y, 0);
		}
	}

	update() {
		this.translateX((this.x - this.position.x) * this.speed);
		this.translateY((this.y - this.position.y) * this.speed);
	}
}
