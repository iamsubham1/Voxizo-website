import CarouselCard from "./CarouselCard";
import "./CarouselPage.css";
import googleImg from "../../assets/carouselCardImages/google-color-svgrepo-com.svg";
import shopifyImg from "../../assets/carouselCardImages/shopify-svgrepo-com.svg";
import metaImg from "../../assets/carouselCardImages/meta-svgrepo-com.svg";

const CarouselPage: React.FC = () => {
  return (
    <div className=" wrap">
      <div className="slider ">
        <div className="slider-track">
          {/**9 slides */}
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>

          {/**another doubled slides */}
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={googleImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={shopifyImg} altText="shopify" />
          </div>
          <div className="slide">
            <CarouselCard image={metaImg} altText="shopify" />
          </div>
        </div>
      </div>
      <div className="carouselPage-info ">
        <h1>We Scale <span>Brands.</span></h1>
        <div className="carouselPageInfo-paragraphs">
          <p>Specialised in growing brands from 100k/month to </p>
          <p>1M/month and beyond.</p>
        </div>
        <div className="carouselPageInfo-button">
          <button>Book a call</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
