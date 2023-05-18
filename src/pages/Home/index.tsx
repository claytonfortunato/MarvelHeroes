import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import { Characters } from "../../components/Characters";

import api from "../../services/api";

import { PropsData } from "../../@types/interface";

import * as C from "./styles";
import { SliderYear } from "../../components/SliderYear";
import { Comics } from "../../components/Comics";

export const Home = () => {
  const [year, setYear] = useState<PropsData[]>([]);
  const [events, setEvents] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/comics?startYear=2021`)
      .then((res) => {
        console.log(res.data.data);
        setYear(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("/events")
      .then((res) => {
        setEvents(res.data.data.results);
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
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
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
            {year.map((char) => (
              <SwiperSlide>
                <SliderYear
                  title={char.title}
                  thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </C.BoxChar>
      </C.ContentCarousel>

      <C.Content>
        {events.map((comics) => (
          <Comics
            image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
            title={comics.title}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
