import { TopNotice } from "@/components/sections/TopNotice";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Archetypes } from "@/components/sections/Archetypes";
import { GiftPrinciple } from "@/components/sections/GiftPrinciple";
import { Logistics } from "@/components/sections/Logistics";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <TopNotice />
      <Hero />
      <Problem />
      <Solution />
      <Archetypes />
      <GiftPrinciple />
      <Logistics />
      <CTA />
      <Footer />
    </>
  );
}
