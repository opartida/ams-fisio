import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        {this.props.slides.map((slide) => {
          return <div>{slide}</div>
        })}
      </Slider>
    )
  }
}

export default Carousel
