import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Position camera - initial position
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    // Create stars
    const stars = createParticles(scene);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Get scroll progress for hero section
      const scrollProgress = getScrollProgress('home');

      // Update stars based on scroll
      updateStars(stars, scrollProgress);

      // Rotate camera based on scroll progress
      updateCamera(camera, scrollProgress);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

function getScrollProgress(sectionId: string): number {
  const element = document.getElementById(sectionId);
  if (!element) return 0;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how much of the section is visible
  const elementTop = rect.top;
  const elementBottom = rect.bottom;

  if (elementBottom < 0 || elementTop > windowHeight) {
    return 0; // Not visible
  }

  // Calculate scroll progress (0 to 1)
  const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
  const totalHeight = rect.height;
  const progress = Math.max(0, Math.min(1, visibleHeight / totalHeight));

  return progress;
}

function createParticles(scene: THREE.Scene): { mesh: THREE.Mesh; orbitData: { radius: number; speed: number; angle: number; verticalOffset: number } }[] {
  // Create star shape geometry
  const starGeometry = createStarGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
  const stars: { mesh: THREE.Mesh; orbitData: { radius: number; speed: number; angle: number; verticalOffset: number } }[] = [];

  // Create evenly distributed rings of stars
  const rings = 5; // Number of orbital rings
  const starsPerRing = 16; // Stars per ring
  let starIndex = 0;

  for (let ring = 0; ring < rings; ring++) {
    const ringRadius = 2 + (ring * 1.5); // Evenly spaced rings: 2, 3.5, 5, 6.5, 8
    const starsInThisRing = starsPerRing + (ring * 2); // More stars in outer rings

    for (let starInRing = 0; starInRing < starsInThisRing; starInRing++) {
      const star = new THREE.Mesh(starGeometry, material.clone());

      // Evenly distribute stars around the ring
      const baseAngle = (starInRing / starsInThisRing) * Math.PI * 2;
      const angleVariation = (Math.random() - 0.5) * 0.3; // Small random variation

      // Create orbital parameters for each star
      const orbitData = {
        radius: ringRadius + (Math.random() - 0.5) * 0.5, // Slight radius variation
        speed: 0.1 + (ring * 0.05) + Math.random() * 0.15, // Inner rings slower
        angle: baseAngle + angleVariation,
        verticalOffset: (Math.random() - 0.5) * 3 // Vertical position (-1.5 to 1.5)
      };

      // Set initial position
      star.position.set(
        Math.cos(orbitData.angle) * orbitData.radius,
        orbitData.verticalOffset,
        Math.sin(orbitData.angle) * orbitData.radius
      );

      // Set initial star size (will be animated later)
      const baseScale = 0.2 + Math.random() * 0.4;
      star.scale.setScalar(baseScale);

      // Store base scale for animation
      (star as any).baseScale = baseScale;

      scene.add(star);
      stars.push({ mesh: star, orbitData });
      starIndex++;
    }
  }

  return stars;
}

function createStarGeometry(): THREE.BufferGeometry {
  const starShape = new THREE.Shape();

  // Create 5-pointed star shape
  const outerRadius = 0.03;
  const innerRadius = 0.015;
  const points = 5;

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }

  starShape.closePath();

  const extrudeSettings = {
    depth: 0.02,
    bevelEnabled: false
  };

  return new THREE.ExtrudeGeometry(starShape, extrudeSettings);
}

function updateCamera(camera: THREE.PerspectiveCamera, scrollProgress: number) {
  // Rotate camera around the center based on scroll progress (reversed)
  const maxRotation = Math.PI * 0.5; // 90 degrees maximum rotation
  const rotationAngle = -scrollProgress * maxRotation; // Negative for reverse direction

  // Keep camera at fixed distance from center
  const radius = 5;
  camera.position.x = Math.sin(rotationAngle) * radius;
  camera.position.z = Math.cos(rotationAngle) * radius;

  // Make camera look at the center
  camera.lookAt(0, 0, 0);
}

function updateStars(stars: { mesh: THREE.Mesh; orbitData: { radius: number; speed: number; angle: number; verticalOffset: number } }[], scrollProgress: number) {
  const time = Date.now() * 0.001;

  stars.forEach((starObj, index) => {
    const { mesh: star, orbitData } = starObj;

    // Update orbital angle based on time and speed
    orbitData.angle += orbitData.speed * 0.01;

    // Calculate new position in circular orbit
    star.position.x = Math.cos(orbitData.angle) * orbitData.radius;
    star.position.z = Math.sin(orbitData.angle) * orbitData.radius;
    star.position.y = orbitData.verticalOffset + Math.sin(time * 0.5 + index) * 0.1;

    // Rotate the star itself for sparkle effect
    star.rotation.z += 0.02;
    star.rotation.y += 0.01;

    // Adjust opacity based on scroll progress
    if (star.material instanceof THREE.MeshBasicMaterial) {
      star.material.opacity = 0.4 + scrollProgress * 0.5;
    }

    // Add slight size pulsing effect using stored base scale
    const baseScale = (star as any).baseScale || 0.5;
    const pulse = baseScale + Math.sin(time * 2 + index) * 0.1;
    star.scale.setScalar(pulse);
  });
}