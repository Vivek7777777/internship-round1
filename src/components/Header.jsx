import React from "react";
import Payment from "./Payment";
import icon1 from "./../assets/Icon.png";
import icon2 from "./../assets/Icon-1.png";
import icon3 from "./../assets/Icon-2.png";
import icon4 from "./../assets/Icon-3.png";
import live from "./../assets/live.png";

function Header() {
  return (
    <>
      <main>
        <div className="box main_left">
          <div className="main_box main_left_content">
            <h1>Access curated courses worth  &nbsp;
              <p> ₹ <del><span>18,500</span></del></p>
              &nbsp;at just&nbsp;
              <p>₹ 99</p>
              &nbsp;pe year!
            </h1>
            <div className="service">
              <img className="service_icon" src={icon1} alt="bookimg" />
              <div className="service_content"><span>100+</span> Job relevant courses</div>
            </div>
            <div className="service">
              <img className="service_icon" src={icon2} alt="clock" />
              <div className="service_content"><span>20,000+  </span> Hours of content</div>
            </div>
            <div className="service">
              <img className="service_icon" src={live} alt="livetv" />
              <div className="service_content"><span>Exclusive</span> webinar access</div>
            </div>
            <div className="service">
              <img className="service_icon" src={icon3} alt="degree" />
              <div className="service_content">Scholarship worth <span>₹94,500</span></div>
            </div>
            <div className="service">
              <img className="service_icon" src={icon4} alt="adds" />
              <div className="service_content"><span>Ad Free</span> learning experience</div>
            </div>

          </div>
        </div>
        <div className="box main_right">
          <div className="main_box main_right_content">
            <Payment/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Header;