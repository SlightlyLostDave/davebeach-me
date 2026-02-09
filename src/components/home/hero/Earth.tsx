import gsap from 'gsap';
import * as THREE from 'three';

import earthVertex from './shaders/earth/vertex.glsl';
import earthFragment from './shaders/earth/fragment.glsl';
import atmosphereVertex from './shaders/atmosphere/vertex.glsl';
import atmosphereFragment from './shaders/atmosphere/fragment.glsl';

import day from 'src/assets/hero/day.jpg';
import night from 'src/assets/hero/night.jpg';
import clouds from 'src/assets/hero/specular-clouds.jpg';

const initEarth = (): { scene: THREE.Scene } => {
  const canvas = document.querySelector('.earth-3d') as HTMLCanvasElement;
  const scene = new THREE.Scene();
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: window.devicePixelRatio,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(
    15,
    size.width / size.height,
    0.1,
    10000,
  );
  camera.position.set(0, 0.1, 19);
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(size.pixelRatio);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // texture
  const TL = new THREE.TextureLoader();
  const dayTexture = TL.load(day.src);
  const nightTexture = TL.load(night.src);
  const specularCloudsTexture = TL.load(clouds.src);

  dayTexture.colorSpace = THREE.SRGBColorSpace;
  nightTexture.colorSpace = THREE.SRGBColorSpace;

  const baseAnisotropy = renderer.capabilities.getMaxAnisotropy();
  dayTexture.anisotropy = baseAnisotropy;
  nightTexture.anisotropy = baseAnisotropy;
  specularCloudsTexture.anisotropy = baseAnisotropy;

  // geometry
  const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
  const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);

  const atmosphereDayColour = '#27496d';
  const atmosphereTwilightColour = '#0f2f89';

  // shader
  const earthShader = new THREE.ShaderMaterial({
    vertexShader: earthVertex,
    fragmentShader: earthFragment,
    uniforms: {
      uDayTexture: new THREE.Uniform(dayTexture),
      uNightTexture: new THREE.Uniform(nightTexture),
      uSpecularCloudsTexture: new THREE.Uniform(specularCloudsTexture),
      uSunDirection: new THREE.Uniform(new THREE.Vector3(-1, 0, 0)),
      uAtmosphereDayColour: new THREE.Uniform(
        new THREE.Color(atmosphereDayColour),
      ),
      uAtmosphereTwilightColour: new THREE.Uniform(
        new THREE.Color(atmosphereTwilightColour),
      ),
    },
    transparent: true,
  });
  const atmosphereShader = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.BackSide,
    vertexShader: atmosphereVertex,
    fragmentShader: atmosphereFragment,
    uniforms: {
      uOpacity: { value: 1 },
      uSunDirection: new THREE.Uniform(new THREE.Vector3(-1, 0, 0)),
      uAtmosphereDayColour: new THREE.Uniform(
        new THREE.Color(atmosphereDayColour),
      ),
      uAtmosphereTwilightColour: new THREE.Uniform(
        new THREE.Color(atmosphereTwilightColour),
      ),
    },
    depthWrite: false,
  });

  const earth = new THREE.Mesh(earthGeometry, earthShader);
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereShader);
  atmosphere.scale.set(1.13, 1.13, 1.13);

  const earthGroup = new THREE.Group().add(earth, atmosphere);

  let sunSpherical = new THREE.Spherical(1, Math.PI * 0.48, -1.8);
  const sunDirection = new THREE.Vector3();

  sunDirection.setFromSpherical(sunSpherical);

  earthShader.uniforms.uSunDirection.value.copy(sunDirection);
  atmosphereShader.uniforms.uSunDirection.value.copy(sunDirection);

  scene.add(earthGroup);

  // Animation loop
  gsap.ticker.add((time) => {
    earth.rotation.y = time * 0.15;

    renderer.render(scene, camera);
  });
  gsap.ticker.lagSmoothing(0);

  // Resize handler
  window.addEventListener('resize', () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    size.pixelRatio = window.devicePixelRatio;

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(size.pixelRatio);
  });

  return { scene };
};

export default initEarth;
