import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import { Characters } from "../../components/Characters";

import api from "../../services/api";

import { PropsData } from "../../@types/types";

import * as C from "./styles";
import { SliderYear } from "../../components/SliderYear";

export const Home = () => {
  const [character, setCharacter] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/comics?startYear=2021`)
      .then((res) => {
        setCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <C.ContentCarousel>
        <C.HeaderCarousel>Start Year 2021</C.HeaderCarousel>

        <C.BoxChar>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={150}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              769: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwipper"
          >
            {character.map((character) => (
              <SwiperSlide>
                <SliderYear
                  title={character.title}
                  thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </C.BoxChar>
      </C.ContentCarousel>
    </C.Container>
  );
};
