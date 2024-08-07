import dynamic from 'next/dynamic'

import FirstSections from "@/components/FirstSection/FirstSections";
import MyBrain from "@/components/MyIdia/MyBrain";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/SecondSection/SecondSection";
import AboutSection from '@/components/AboutSection/AboutSection';

const VideoSection = dynamic(() => import("@/components/VideoSection/VideoSection"), { ssr: true })
const ThierdSections = dynamic(() => import("@/components/ThierdSection/ThierdSections"), { ssr: true })

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden w-screen">
      <div className='z-50 w-full h-full overflow-hidden bg-black bg-opacity-90'>
        <Navbar />
        <div className="flex flex-col gap-16 lg:mb-20 md:mb-0 mb-0 ">
          <FirstSections />
          <AboutSection />
          <ThierdSections />
          <SecondSection />
        </div>
        <div className="lg:block md:block hidden">
          <VideoSection />
        </div>
        <div className="lg:hidden md:hidden block">
          <MyBrain />
        </div>
      </div>
    </div>
  );
}
