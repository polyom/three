import { PerspectiveCamera, Scene, WebGLRenderer, Object3D } from "three";

// @ts-ignore
Object3D.prototype.update = () => {};

export class Client {
	renderer = new WebGLRenderer({ antialias: true });
	scene = new Scene();
	camera = new PerspectiveCamera();

	constructor() {
		this.resize();
		window.addEventListener("resize", () => this.resize());
		this.renderer.setAnimationLoop(this.loop.bind(this));
		this.renderer.setPixelRatio(window.devicePixelRatio);
	}

	resize(width = window.innerWidth, height = window.innerHeight) {
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(width, height);
	}

	loop() {
		this.renderer.render(this.scene, this.camera);
		// @ts-ignore
		this.scene.traverse((child) => child.update());
	}
}
