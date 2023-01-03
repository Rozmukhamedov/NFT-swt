import "./style.css";
import React, { FC } from "react";
import Slider from "react-slick";
import { Button } from "components";
import { Link } from "react-router-dom";
import IMG from "assets/images/product.png";
import { ReactComponent as SampleNextArrow } from "assets/images/SampleNextArrow.svg";
import { ReactComponent as SamplePrevArrow } from "assets/images/SamplePrevArrow.svg";
import { ReactComponent as RIGHTICON } from "assets/images/right.svg";

type CarouselProps = {
  data: any;
};

const Carousel: FC<CarouselProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <div className="carousel__flex">
        <h2>NFTs к событиям</h2>
        <Button type="button">
          <Link to="/products">
            Посмотреть все <RIGHTICON />
          </Link>
        </Button>
      </div>
      <Slider {...settings} className="box">
        {data?.map((d: any) => (
          <div>
            <div className="carousel__card">
              <img src={d?.image} alt="" />
              <div className="new__year">
                <p>Новый год</p>
              </div>
              <h5>{d?.title}</h5>
              <p>от {d?.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
