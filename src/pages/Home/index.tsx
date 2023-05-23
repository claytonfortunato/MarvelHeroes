import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          <Slider {...settings}>
            {year.map((char) => (
              <CardList
                key={char.id}
                name={char.title}
                thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                details={char.urls[0].url}
              />
            ))}
          </Slider>
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
