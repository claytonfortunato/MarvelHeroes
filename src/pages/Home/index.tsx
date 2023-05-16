import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import { Characters } from "../../components/Characters";

import api from "../../services/api";

import { PropsData } from "../../@types/types";

import * as C from "./styles";

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
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
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
            navigation={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {character.map((character) => (
              <SwiperSlide>
                <div className="box">
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt=""
                  />
                  <p>{character.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </C.BoxChar>
      </C.ContentCarousel>
    </C.Container>
  );
};
