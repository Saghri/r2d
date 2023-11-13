import React from 'react'
import './Footer.css'
import {Row, Col } from 'reactstrap'
import googlePlay from '../../images/GooglePlay.jpg'
import appStore from '../../images/appStore.png'
import footer_logo from '../../images/footer logo.png'
import logo_bottom from '../../images/logo bottom.png'
import twitter from '../../images/twitter.png'
import pInterest from '../../images/Pinterest.png'
import be from '../../images/Be.png'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'
import insta from '../../images/instagram.png'

export default function Footer() {
  return (
    <>
      <footer>
      <Row>
          <Col lg='4' md='4' sm='4'>
            <div className="footer_left">
              <div className="footer_left_text">
              <h1 className='footer_left_heading'>OUR APP</h1>
              <p className='footer_left_body'>Download our app now and unlock a world of convenience and savings for your next car rental adventure. Experience the future of car rental at your fingertips!</p>
              </div>
              <div className='footer_left_buttons'>
                <Row>
                <a href="$" class="btn"><img src={googlePlay} alt="googlePlay" /></a>
                </Row>
                <Row>
                <a href="$" class="btn"><img src={appStore} alt="appStore" /></a>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg='4' md='4' sm='4'>
            <div className="footer_mid">
            <Row>
              <div className="footer_logo">
              <img src={footer_logo} alt="r2d logo" />
              </div>
            </Row>
            <Row>
              <div className="logo_bottom">
              <img src={logo_bottom} alt="logo bottom" />
              </div>
            </Row>
            <Row>
              <div className="social_media">
              <ul>
                <li><a href="google.com"><img src={twitter} alt="twitter" /></a></li>
                <li><a href="$"><img src={pInterest} alt="pinterest" /></a></li>
                <li><a href="$"><img src={be} alt="Be" /></a></li>
                <li><a href="$"><img src={facebook} alt="facebook" /></a></li>
                <li><a href="$"><img src={youtube} alt="youtube" /></a></li>
                <li><a href="$"><img src={insta} alt="instagram" /></a></li>
              </ul>
              </div>
            </Row>
            </div>
          </Col>
          <Col lg='4' md='4' sm='4'>
            <div className="footer_right">
              <h1>CONTACTS</h1>
              <div className="showRoom">
                <span className='contact_detail'>: SHOWROOM LOCATION :</span>
              </div>
              <div className="address">
                <span>305F, Ibn Battuta Gate Offices , Jabel Ali First Dubai</span>
              </div>
              <div className="phone">
                <span className='contact_detail'>PHONE:</span> <span>+971526444722</span>
              </div>
              <div className='email'>
                <span className='contact_detail'>EMAIL</span><span>faisal.nasir@r2d.ae</span>
              </div>
              <div className="time">
                <span className='contact_detail'>HOURS:</span><span>Mon – Fri : 9am – 6pm</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg='12' md='12' sm='12'>
            <div className='copyright'><span>Copyright © 2023 RENT TO DRIVE. All Rights Reserved.</span></div>
          </Col>
        </Row>
      </footer>
    </>
  )
}
