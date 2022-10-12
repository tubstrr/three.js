import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Objects
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#f002ed" }));
group.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#3D6FB1" }));
group.add(cube2);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#1A2330" }));
group.add(cube3);

cube1.position.x = -2;
cube2.position.x = 0;
cube3.position.x = 2;

group.rotation.y = 1;
group.scale.y = 3;
group.position.y = 1.5;

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

camera.lookAt(group.position);

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
