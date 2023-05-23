import { useEffect, useState } from "react";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import api from "../../services/api";
import { PropsData } from "../../@types/interface";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";
import { Input } from "../../components/Input";

import * as C from "./styles";

export const Home = () => {
  const [year, setYear] = useState<PropsData[]>([]);
  const [events, setEvents] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get(`/comics?startYear=2021`)
      .then((res) => {
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

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("events", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setEvents(response.data.data.results);
    }
    SearchHero();
  }, [search]);

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
            {year.map((char) => (
              <SwiperSlide key={char.id}>
                <CardList
                  key={char.id}
                  name={char.title}
                  thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                  details={char.urls[0].url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </C.BoxChar>
      </C.ContentCarousel>

      <C.Content>
        <C.HeaderComics>Comics Events</C.HeaderComics>

        <Input
          placeholder="Search by Comics Events"
          value={search}
          search={(e) => setSearch(e.target.value)}
        />
        <C.Wrapper>
          {events.length === 0 ? (
            <Loading />
          ) : (
            events.map((comics) => (
              <CardList
                key={comics.id}
                thumbnail={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                name={comics.title}
                details={comics.urls[0].url}
              />
            ))
          )}
        </C.Wrapper>
      </C.Content>
    </C.Container>
  );
};
