import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// interface ElementPosition {
//   x: number;
//   y: number;
//   z?: number;
// }

// type GsapAnimateFunction = (elPosition: Vector3) => void;

// type AnimationFunction = () => {
//   gsapAnimate: GsapAnimateFunction;
// };

export const animationFuntion = function (elPosition, target, onUpdate) {
  const tl = gsap.timeline();
  tl.to(elPosition, { x: -9.7364442617, y: 1.7193090615, z: 1.4985424552 })
    .to(target, {})
    .to(elPosition, { x: 5.5740315863, y: -8.3002127818, z: 0.1914148691 })
    .to(elPosition, { x: 4.0305446548, y: -1.3615265342, z: -7.1437432931 });
};
