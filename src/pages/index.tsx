import { GetServerSideProps, NextPage } from "next";
import BannerSection from "@/components/section/banner";
import HowWeDoItSection from "@/components/section/how-we-do-it";
import SocialProofSection from "@/components/section/social";
import WhatYouWillGetSection from "@/components/section/what-will-you-get";
// import CallToActionSection from "@/components/section/call-to-action";

const Home: NextPage = () => {
  return (
    <>
      <BannerSection />
      <SocialProofSection />
      <HowWeDoItSection />
      <WhatYouWillGetSection />
      {/* <CallToActionSection /> */}
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
        "Drive explosive business growth with proven digital strategies and elevate your brand through effective online marketing techniques.",
      metaKeywords:
        "Social media growth, Social media promotion, Increase online presence, Social media strategies, Brand visibility, Online marketing services, Meme page",
    },
  };
};
