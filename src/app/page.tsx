import dynamic from 'next/dynamic'

import FirstSections from "@/components/FirstSection/FirstSections";
import MyBrain from "@/components/MyIdia/MyBrain";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/SecondSection/SecondSection";
import AboutSection from '@/components/AboutSection/AboutSection';
import { Suspense } from 'react';
import ProjectsSection from './projects/components/ProjectsSection';

import { Platypi } from 'next/font/google';

const VideoSection = dynamic(() => import("@/components/VideoSection/VideoSection"), { ssr: true })
const ThierdSections = dynamic(() => import("@/components/ThierdSection/ThierdSections"), { ssr: true })


const platypi = Platypi({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${platypi.className} relative flex min-h-screen flex-col items-center overflow-hidden w-screen`}>
      <div className='z-50 w-full h-full overflow-hidden bg-black bg-opacity-90'>
        <Navbar />
        <div className="flex flex-col gap-16 lg:mb-20 md:mb-0 mb-0 ">
          <FirstSections />
          <AboutSection />
          <Suspense fallback={null}>
            <ThierdSections />
          </Suspense>
          <SecondSection />
        </div>
        <div className="lg:block md:hidden hidden">
          <VideoSection />
        </div>
        <div className="lg:hidden md:block block">
          <MyBrain />
        </div>
        <div className='mt-[13rem]'>
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
