import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import img1Thumb from '../../images/image-product-1-thumbnail.jpg'
import img2Thumb from '../../images/image-product-2-thumbnail.jpg'
import img3Thumb from '../../images/image-product-3-thumbnail.jpg'
import img4Thumb from '../../images/image-product-4-thumbnail.jpg'
import CarouselLightBox from './CarouselLightBox.jsx'
import nextIcon from '../../images/icon-next.svg'
import prevIcon from '../../images/icon-previous.svg'
const topImages = [img1, img2, img3, img4]
const bottomImages = [img1Thumb, img2Thumb, img3Thumb, img4Thumb]

const NextArrow = props => {
  const { onClick, className } = props
  return (
    <div className={`${className} ${styles.next}`} onClick={onClick}>
      <img src={nextIcon} />
    </div>
  )
}
const PrevArrow = props => {
  const { onClick, className } = props
  return (
    <div className={`${className} ${styles.prev}`} onClick={onClick}>
      <img src={prevIcon} />
    </div>
  )
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      imageIndex: 0,
      lightBoxOpen: false,
    }
  }

  openLightBox = () =>{
    if(this.props.width > 650){
      this.setState({
        lightBoxOpen : true
      })
    }
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      imageIndex: 0,
    })
  }

  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 970,
          settings: {
            centerMode: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            centerMode: false,
            arrows:true,
            nextArrow:<NextArrow/>,
          prevArrow:<PrevArrow/>
          },
        },
      ],
    }
    const settings2 = {
      responsive: [
        {
          breakpoint: 970,
          settings: {
            vertical: true,
          },
        },
      ],
    }

    return (
      <div className={styles.wrapper}>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          fade='false'
          className={styles.topSlider}
          {...settings}
        >
          {topImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className={styles.image}
                
                onClick={ () => this.openLightBox()}
                
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          focusOnSelect={true}
          className={styles.bottomSlider}
          beforeChange={(current, next) => {
            this.setState({ imageIndex: next })
          }}
          {...settings2}
          
        >
          {bottomImages.map((image, index) => (
            <div key={index}>
              <div className={`${index === this.state.imageIndex && styles.imgBox}`}>
                <img
                  src={image}
                  className={`${styles.image} ${index === this.state.imageIndex && styles.active}`}
                />
              </div>
            </div>
          ))}
        </Slider>
        {this.state.lightBoxOpen && (
          <CarouselLightBox
            closeLightBox={() =>
              this.setState({
                lightBoxOpen: false,
              })
            }
          />
        )}
      </div>
    )
  }
}
