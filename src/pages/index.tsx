import { GetServerSideProps, NextPage } from "next";
import BannerSection from "@/components/section/banner";
import HowWeDoItSection from "@/components/section/how-we-do-it";
import SocialProofSection from "@/components/section/social";
import WhatYouWillGetSection from "@/components/section/what-will-you-get";
import CallToActionSection from "@/components/section/cta";
import Link from "next/link";

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
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      metaTitle:
        "Unlock your business potential with revolutionary digital marketing solutions",
      metaDescription:
        "Unlock explosive social media growth for your business with our proven digital marketing strategies.",
      metaKeywords:
        "Social media growth, Social media promotion, Increase online presence, Social media strategies, Brand visibility, Online marketing services, Meme page",
    },
  };
};
