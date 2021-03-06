//WebGL//

//OrbitControls = require('js/orbitcontrols.js');

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

let genericTexture = new THREE.TextureLoader().load( 'js/textures/colormap.jpg' );
let historyTexture = new THREE.TextureLoader().load( 'js/textures/historymap.jpg' );
let planetGeometry = new THREE.SphereGeometry(0.5, 50, 50);
let planetMaterial = new THREE.MeshBasicMaterial( { map: genericTexture } );
//if ( pageChangeCheck != 0 ) {
//	if ( page != 1 ) {
//		let planetMaterial = new THREE.MeshBasicMaterial( { map: genericTexture } );
//	}
//	else {
//		let planetMaterial = new THREE.MeshBasicMaterial( { map: historyTexture } );
//	}
//};
let planetBumpMap = new THREE.TextureLoader().load( 'js/textures/bumpmap.jpg' );
planetMaterial.displacementMap = planetBumpMap;
planetMaterial.displacementScale = 50;
planetMaterial.specularMap = new THREE.TextureLoader().load( 'js/textures/specmap.jpg' );
planetMaterial.specular = new THREE.Color('grey');
let planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);
planet.rotation.x = 0.3;

var light = new THREE.PointLight(0xffffff, 1, Infinity);
camera.add(light);
scene.add(camera);

let renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ).setAttribute("id", "renderer-canvas");
renderer.antialias = true;
camera.position.z = 2.5;
//var controls = new OrbitControls( camera, renderer.domElement );
//controls.update();

let render = function () {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
	planet.rotation.y += 0.0005;
	//controls.update();
};

render();

//Gradient Background//

const [red, green, blue] = [240, 240, 240]
const vpFraction = ( window.innerHeight / 15 );

window.addEventListener('scroll', () => {
	const y = (window.scrollY || window.pageYOffset) / vpFraction
	const [r, g, b] = [red+y, green+y, blue+y].map(Math.round)
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
	document.getElementsByClassName("topNav").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});

//On Resize//

window.addEventListener('resize', function(event){
	const vpFraction = ( window.innerHeight / 15 );
	camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
});