import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './lightbox.module.css'
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import img1Thumb from '../../images/image-product-1-thumbnail.jpg'
import img2Thumb from '../../images/image-product-2-thumbnail.jpg'
import img3Thumb from '../../images/image-product-3-thumbnail.jpg'
import img4Thumb from '../../images/image-product-4-thumbnail.jpg'
import nextIcon from '../../images/icon-next.svg'
import prevIcon from '../../images/icon-previous.svg'
import { AiOutlineClose } from 'react-icons/ai'

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
export default class CarouselLightBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      imageIndex: 0,
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
    return (
      <div className={styles.container}>
        <button className={styles.closeButton} onClick = {this.props.closeLightBox}>
          <AiOutlineClose size = {22}/>
        </button>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          fade='false'
          className={styles.topSlider}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          <div>
            <img src={img1} className={styles.image} alt ='product'/>
          </div>
          <div>
            <img src={img2} className={styles.image} alt ='product'/>
          </div>
          <div>
            <img src={img3} className={styles.image} alt ='product'/>
          </div>
          <div>
            <img src={img4} className={styles.image} alt ='product'/>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          focusOnSelect={true}
          className={styles.bottomSlider}
          beforeChange={(current, next) => {
            this.setState(() => (this.state.imageIndex = next))
          }}
        >
          {bottomImages.map((image, index) => (
            <div key={index}>
              <div
                className={`${styles.imgBox} ${
                  index === this.state.imageIndex && styles.imgBoxActive
                }`}
              >
                <img
                  src={image}
                  alt='product'
                  className={`${styles.image} ${index === this.state.imageIndex && styles.active}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
