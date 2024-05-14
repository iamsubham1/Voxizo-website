"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

interface CardProps {
  image: string; // Single image URL
altText: string; // Accessibility text for the image
}

const  CarouselCard :React.FC<CardProps> = ({image , altText}) => {
  return (
    <div className="carouselCard-container">
      <PinContainer
        title={altText}
        href="#google"
      >
        <div className="flex basis-full justify-center items-center flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[8rem] h-[8rem] ">
          <Image
            src={image}
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl cardimg"
            alt={altText}
          /> 
        </div>
      </PinContainer>
    </div>
  );
}

export default CarouselCard;