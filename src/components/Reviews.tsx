import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Reviews.css";
import { customerReviews } from "../scripts/reveiew";
import 'swiper/css';

// Install Swiper modules

function Reviews() {
  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <Swiper
          navigation
          pagination={{ clickable: true }}
        >
          {customerReviews.map((reviewMessage, index) => (
            <SwiperSlide key={index}>
              <div className="rw-text-format">
                <div style={{ width: "150px", height: "150px" }}>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "100%",
                      marginRight: '10px'
                    }}
                    src={reviewMessage.image}
                    alt=""
                  />
                </div>
                <span className="rw-text-quote1">''</span>
                <span className="rw-review">{reviewMessage.message}</span>
                <span className="rw-text-quote2">''</span>
              </div>
              <div className="rw-authors">
                <div className="rw-names">
                  <p className="rw-reviewer-name">{reviewMessage.name}</p>
                  <p className="rw-reviewer-place">{reviewMessage.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
