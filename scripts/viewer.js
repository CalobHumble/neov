const THREE = require('three');

let scene = new THREE.Scene();
scene.background = new THREE.Color( 0x282c34 ); 
//This is set to my setup colors.  Will do color lookups in the future

let camera = new THREE.PerspectiveCamera( 15, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

let ModelMesh;

ModelMesh = new THREE.Mesh(
	new THREE.BoxGeometry( 1, 1, 1 ),
	new THREE.MeshBasicMaterial({
		color: 0x00ff00 
	}));

scene.add( ModelMesh );
scene.add( camera );

camera.position.z = 5;
camera.lookAt( ModelMesh.position );

let animate = function () {
	requestAnimationFrame( animate );
	ModelMesh.rotation.x += 0.1;
	ModelMesh.rotation.y += 0.1;
	renderer.render( scene, camera );
};

animate();
