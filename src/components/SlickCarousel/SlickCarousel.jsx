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

const bottomImages = [img1Thumb, img2Thumb, img3Thumb, img4Thumb]

export default class AsNavFor extends Component {
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
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          fade='false'
          className={styles.topSlider}
        >
          <div>
            <img src={img1} className={styles.image} />
          </div>
          <div>
            <img src={img2} className={styles.image} />
          </div>
          <div>
            <img src={img3} className={styles.image} />
          </div>
          <div>
            <img src={img4} className={styles.image} />
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
            <div key={index} >
              <div className={` ${index === this.state.imageIndex && styles.imgBox}`}>
                  <img
                    src={image}
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
