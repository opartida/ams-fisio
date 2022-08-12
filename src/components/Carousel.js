import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>{this.props.slides[0]}</div>
        <div>{this.props.slides[1]}</div>
        <div>{this.props.slides[2]}</div>
      </Slider>
    );
  }
}

export default Carousel;
