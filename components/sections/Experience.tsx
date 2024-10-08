"use client";

import React, { Suspense, useState } from "react";
import { workExperiences } from "@/constans";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "@/components/shared/CanvasLoader";
import Developer from "@/components/Models/Developer";

const Experience = () => {
  const [animation, setAnimation] = useState("idle");

  return (
    <section id={"work"} className={"c-space py-20"}>
      <div className={"w-full text-white-600"}>
        <h3 className={"head-text"}>My Work Experience</h3>
        <div className={"work-container"}>
          <div className={"work-canvas"}>
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animation}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className={"work-content"}>
            <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon, animation }) => (
                  <div
                    key={id}
                    className={"work-content_container group"}
                    onClick={() => setAnimation(animation.toLowerCase())}
                    onPointerOver={() => setAnimation(animation.toLowerCase())}
                    onPointerOut={() => setAnimation("idle")}
                  >
                    <div
                      className={
                        "flex flex-col h-full justify-start items-center py-2"
                      }
                    >
                      <div className={"work-content_logo"}>
                        <Image
                          src={icon}
                          alt={name}
                          width={50}
                          height={50}
                          className={"size-full"}
                        />
                      </div>
                      <div className={"work-content_bar"} />
                    </div>

                    <div className={"sm:p-5 px-2.5 py-5"}>
                      <p className={"font-bold text-white-800"}>{name}</p>
                      <p className={"text-sm mb-5"}>{pos}</p>
                      <p
                        className={
                          "group-hover:text-white transition-colors ease-in-out duration-500"
                        }
                      >
                        {title}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
