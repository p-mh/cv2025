"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const light = document.createElement("div");
    light.className = "light-effect";
    document.body.appendChild(light);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX - 250;
      targetY = e.clientY - 250;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.03;
      currentY += (targetY - currentY) * 0.03;
      light.style.left = `${currentX}px`;
      light.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeChild(light);
    };
  }, []);
 
  return (
    <div className="flex flex-col justify-center-safe items-center-safe min-h-screen p-6">
      <div className="pb-[100px] main-page-title">
        <h1 className="text-9xl space-mono-bold">Pauline<br/>Miele</h1>
        <h2 className="mt-[50px] text-3xl cormorant-infant-italic">Développeuse front-end</h2>
        {/* <p className="mt-[200px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique quis tortor
          tristique rhoncus. Duis vel sem eu ex pulvinar facilisis. Donec ut mattis magna. Proin
          auctor urna vitae enim fermentum, nec tempor nulla maximus. Integer quis porta ante, a
          gravida eros. Donec commodo volutpat tellus non gravida. Proin at rhoncus est. Nam suscipit
          ligula quis augue luctus, non venenatis risus elementum. Nulla augue augue, pulvinar non
          efficitur in, accumsan in tortor.
          </p> */}
        </div>
    </div>
  );
}
