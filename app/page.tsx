import { VisualDisplay } from "@/components/main/Display";
import { Hero } from "@/components/main/Hero";
import { Showcase } from "@/components/main/ShowCase";
import { CTA } from "@/components/main/CTA";
import PricingTable from '../components/main/PricingTable'
import SinglePricingTable from '../components/main/SinglePricingTable'
import Frequently from '../components/main/FAQ'
import Features from '../components/main/Features'
import Features2 from '../components/main/Features2'
import Testimanual from '../components/main/Testimonial'


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Features/>
        <Features2/>
        <CTA />
        <VisualDisplay/>
        <PricingTable />
        {/* <SinglePricingTable/> */}
        <Testimanual/>
        <Showcase />
        <Frequently/>
      </div>
    </main>
  );
}
