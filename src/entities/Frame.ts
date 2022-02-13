import { BufferGeometry, Group, Line, LineBasicMaterial, Vector3 } from "three";

export class Frame extends Group {
	line: Line;
	constructor(width: number, height: number) {
		super();
		const material = new LineBasicMaterial({ color: 0xffffff });
		const geometry = new BufferGeometry().setFromPoints([
			new Vector3(-0.5, 0),
			new Vector3(-0.5, -height + 0.5),
			new Vector3(width - 0.5, -height + 0.5),
			new Vector3(width - 0.5, 0.5),
		]);
		this.line = new Line(geometry, material);
		this.add(this.line);
		this.line.add;
	}
}
