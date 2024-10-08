import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { Mesh } from "three";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
const Target = (props) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf",
  );
  const targetRef = useRef<Mesh>(null!);

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};
export default Target;
