import { NextPage } from "next";
import BannerSection from "@/components/section/banner";
import HowWeDoItSection from "@/components/section/how-we-do-it";
import SocialProofSection from "@/components/section/social";
import WhatYouWillGetSection from "@/components/section/what-will-you-get";
import CallToActionSection from "@/components/section/cta";

const Home: NextPage = () => {
  return (
    <>
      <BannerSection />
      <SocialProofSection />
      <HowWeDoItSection />
      <WhatYouWillGetSection />
      <CallToActionSection />
    </>
  );
}

export default Home;