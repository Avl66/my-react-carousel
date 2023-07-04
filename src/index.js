import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'

function App() {
  const arr = [1, 2, 3, 4, 5]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  const appendDots = (dots) => {
    return (
      <div style={{position: 'relative', top: '20px'}}>
        <ul style={{margin: '6px', padding: '6px'}}> {dots} </ul>
      </div>
    )
  }
  // function customPaging(i) {
  //   return <span>{i + 1}</span>
  // }
  return (
    <div className="carousel-container">
      <Slider {...settings} appendDots={appendDots}>
        {/* <img src="https://placekitten.com/100/100" alt="img1" />
        <img src="https://placebear.com/100/100" alt="img2" />
        <img src="https://placekitten.com/100/100" alt="img3" /> */}
        {arr.map((ele) => (
          <h1>{ele}st slider</h1>
        ))}
      </Slider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
