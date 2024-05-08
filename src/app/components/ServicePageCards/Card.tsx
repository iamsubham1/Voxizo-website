"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface CardProps {
  image: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ image, altText }) => {

  return (
    <CardContainer className="inter-var py-0 mainCard-container">

      <CardBody className="bg-black-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border card-body ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cardimg"
            alt={altText}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="card-text"
        >
          {altText}
        </CardItem>

      </CardBody>

    </CardContainer>
  );
}


export default Card