import React from "react";
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import lifestyle1 from "../../images/lifestyle1.jpg";
import lifestyle2 from "../../images/lifestyle2.jpg";
import pets1 from "../../images/pets1.jpg";
import pets2 from "../../images/pets2.jpg";
import medical1 from "../../images/medical1.jpg";
import medical2 from "../../images/medical2.jpg";
import industrial1 from "../../images/industrial1.jpg";
import industrial2 from "../../images/industrial2.jpg";
import fitness1 from "../../images/fitness1.jpg";
import fitness2 from "../../images/fitness2.jpg";
import entertainment1 from "../../images/entertainment1.jpg";
import entertainment2 from "../../images/entertainment2.jpg";

const lifestyleArray = [lifestyle1, lifestyle2];
const petsArray = [pets1, pets2];
const medicalArray = [medical1, medical2];
const industrialArray = [industrial1, industrial2];
const fitnessArray = [fitness1, fitness2];
const entertainmentArray = [entertainment1, entertainment2];

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y]);

const Carousel = ({ category }) => {
  const [photoArray, SetPhotoArray] = React.useState(lifestyleArray);

  React.useEffect(() => {
    switch (category) {
      case "lifestyle":
        SetPhotoArray(lifestyleArray);
        break;
      case "fitness":
        SetPhotoArray(fitnessArray);
        break;
      case "medical":
        SetPhotoArray(medicalArray);
        break;
      case "entertainment":
        SetPhotoArray(entertainmentArray);
        break;
      case "industrial":
        SetPhotoArray(industrialArray);
        break;
      case "pets and animals":
        SetPhotoArray(petsArray);
        break;
      default:
        return category;
    }
  }, [category]);

  return (
    <SwiperContainer>
      <StyledSwiper slidesPerView={1} pagination={{ clickable: true }}>
        {photoArray.map((image) => {
          return (
            <SwiperSlide key={image}>
              <Image src={image} />
            </SwiperSlide>
          );
        })}
        ...
      </StyledSwiper>
    </SwiperContainer>
  );
};

export default Carousel;

const SwiperContainer = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  position: relative;
  height: 500px;
  display: flex;
  width: calc(100vw - 60px);
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: 0px 0px;

  @media (min-width: 768px) {
    object-position: 0px -80px;
  }

  @media (min-width: 1080px) {
    object-position: 0px -150px;
  }
  @media (min-width: 1280px) {
    object-position: 0px -250px;
  }
  @media (min-width: 1440px) {
    object-position: 0px -350px;
  }
  @media (min-width: 1840px) {
    object-position: 0px -450px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;
