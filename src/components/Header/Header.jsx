import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import cartImg from '../../images/image-product-1-thumbnail.jpg'
import avatar from '../../images/image-avatar.png'
import styles from './styles.module.css'
import useWindowDimensions from '../../useWindowsDimensions'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Header = () => {
  const { width } = useWindowDimensions()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const openMenu = curr => {
    let body = document.querySelector('body')
    setCartOpen(false)
    setMenuOpen(!menuOpen)
    if (!curr) {
      body.style.backgroundColor = 'hsl(0,0%,75%)'
      body.style.transition = ' 0.4s'
    } else {
      body.style.backgroundColor = '#fff'
    }
  }
  const openCart = () =>{
    let body = document.querySelector('body')
    setCartOpen(!cartOpen)
    setMenuOpen(false)
    body.style.backgroundColor = '#fff'
  }
  useEffect(() => {
    let body = document.querySelector('body')
    if (menuOpen && width > 764) {
      setMenuOpen(false)
      body.style.backgroundColor = '#fff'
    }
  }, [width])

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.menu_icon} onClick={() => openMenu(menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={20} color='#000' />
            ) : (
              <AiOutlineMenu size={20} color='#000' />
            )}
          </div>
          <img src={logo} alt='sneakers' />
          <nav>
            <ul className={`${styles.list_links} ${menuOpen && styles.responsive}`}>
              <li className={styles.link}>
                <a href=''>Collections</a>
              </li>
              <li className={styles.link}>
                <a href=''>Men</a>
              </li>
              <li className={styles.link}>
                <a href=''>Women</a>
              </li>
              <li className={styles.link}>
                <a href=''>About</a>
              </li>
              <li className={styles.link}>
                <a href=''>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.cartIcon} onClick={openCart}>
            <div className={styles.cartCount}>1</div>
            <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                fill='#69707D'
                fillRule='nonzero'
              />
            </svg>
          </div>
          {cartOpen && !menuOpen &&(
            <div className={styles.cartContainer}>
              <p className={styles.cartLabel}>Cart</p>
              <section className={styles.cartInfo}>
                <div className={styles.productInfo}>
                  <img src={cartImg} className={styles.cartImg} alt='cart-product' />
                  <div className={styles.productDescription}>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x 3 $375.00</p>
                  </div>
                  <svg
                    width='14'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <defs>
                      <path
                        d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                        id='a'
                      />
                    </defs>
                    <use fill='#C3CAD9' fillRule='nonzero' xlinkHref='#a' />
                  </svg>
                </div>
                <button className={styles.checkoutButton}>Checkout</button>
              </section>
            </div>
          )}
          <img src={avatar} alt='user' className={styles.avatar} />
        </div>
      </div>
    </header>
  )
}

export default Header