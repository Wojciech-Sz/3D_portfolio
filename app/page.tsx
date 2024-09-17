import Navbar from "@/app/components/sections/Navbar";
import React from "react";
import Hero from "@/app/components/sections/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
}
