import React from "react";
import Image from "next/image";
import BannerImage from "../../../public/images/banner-area.png";
import Bubbles from "../common/bubbles";

const BannerSection: React.FC = () => {
  return (
    <section
      className="b-banner-section b-section"
      data-testid="b-banner-section"
    >
      <div className="b-banner-heading">
        <div className="container">
          <h1 className="b-tagline">
            <span>Drive explosive</span>
            <span className="b-bordered-text">business growth </span>
            <span className="d-block">
              {" "}
              with proven digital strategies and elevate your brand through
              effective online marketing techniques.
            </span>
          </h1>
        </div>
      </div>
      <div className="b-banner-image-section">
        <div className="container-fluid p-0">
          <div className="b-banner-images">
            {/* {bannerCharactersData.map(character => (
                            <div className='b-banner-group' key={character.id}>
                                <div className="b-callout-container">
                                    <Callout title={character.title} />
                                </div>
                                <Image src={character.imageUrl} width={455} height={440} alt={character.imageAlt} priority className='b-banner-image' />
                            </div>
                        ))} */}
            <Image
              priority
              src={BannerImage.src}
              width={1200}
              height={590}
              alt="banner-image"
            />
          </div>
          {/* <div className='b-banner-static-image'>
                        <Image src={BannerImage.src} width={1200} height={440} alt='banner-image' />
                    </div> */}
        </div>
      </div>
      <Bubbles />
    </section>
  );
};

export default BannerSection;
