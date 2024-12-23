import Develop from "@/components/Develop";
import DevelopDemo from "@/components/DevelopDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import PreviewDemo from "@/components/PreviewDemo";
import Ship from "@/components/Ship";
import ShipStats from "@/components/ShipStats";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Develop />
        <DevelopDemo />
        <Preview />
        <PreviewDemo />
        <Ship />
        <ShipStats />
      </main>
      <Footer />
    </div>
  )
}
