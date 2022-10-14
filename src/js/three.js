import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Objects
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#f002ed" }));
scene.add(cube);

// Axes helper
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.getElementById("three-js");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Resize
window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
});

// Animation
const clock = new THREE.Clock();

const tick = () => {
	// Time
	const elapsedTime = clock.getElapsedTime();

	// Update objects
	cube.rotation.x = elapsedTime;
	cube.rotation.y = elapsedTime;
	// cube.rotation.z = elapsedTime;

	cube.position.x = Math.cos(elapsedTime * 3);
	cube.position.y = Math.sin(elapsedTime * 2);

	camera.position.x = Math.cos(elapsedTime * 1);
	camera.position.y = Math.sin(elapsedTime * 1);

	camera.lookAt(cube.position);
	//
	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
