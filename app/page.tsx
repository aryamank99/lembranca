import Amenities from "@/components/Amenities";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import MiddleSection from "@/components/MiddleSection";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <> 
    <Hero />
    <Welcome />
    <MiddleSection />
    <LastSection />
    {/* <Amenities /> */}
    </>
  )
}