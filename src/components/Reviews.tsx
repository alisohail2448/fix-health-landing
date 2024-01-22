// import { useState } from "react";
// import "../styles/Reviews.css";
// import { customerReviews } from "../scripts/reveiew";

// function Reviews() {
//   let rMessage, rName, rLocation, rImage;
//   const reviewsLength = customerReviews.length - 1;
//   const [review, setReview] = useState(0);

//   // back to previous review
//   const backBtnClick = () => {
//     setReview(review <= 0 ? reviewsLength : review - 1);
//     handleReviewsUpdation();
//   };

//   // go to newer review
//   const frontBtnClick = () => {
//     setReview(review >= reviewsLength ? 0 : review + 1);
//     handleReviewsUpdation();
//   };

//   // update reviews
//   const handleReviewsUpdation = () => {
//     const reviewMessage = customerReviews[review];
//     rName = reviewMessage.name;
//     rLocation = reviewMessage.location;
//     rMessage = reviewMessage.message;
//     rImage = reviewMessage.image;
//   };

//   // list review on visit
//   handleReviewsUpdation();

//   return (
//     <div className="review-section" id="reviews">
//       <div className="rw-text-content">
//         <p className="rw-text-title">
//           More over <span className="rw-text-num">1500+ Customers</span>
//         </p>

//         <p className="rw-text-desc">Don't believe us, Check clients word</p>

//         <p className="rw-text-format">
//           <div style={{ width: "150px", height: "150px" }}>
//             <img
//               style={{
//                 width: "150px",
//                 height: "150px",
//                 objectFit: "cover",
//                 borderRadius: "100%",
//                 marginRight: '10px'
//               }}
//               src={rImage}
//               alt=""
//             />
//           </div>
//           <span className="rw-text-quote1">''</span>
//           <span className="rw-review">{rMessage}</span>
//           <span className="rw-text-quote2">''</span>
//         </p>

//         <div className="rw-authors">
//           <div className="rw-names">
//             <p className="rw-reviewer-name">{rName}</p>
//             <p className="rw-reviewer-place">{rLocation}</p>
//           </div>

//           <div className="rw-btns">
//             <button
//               className="rw-next-btn"
//               type="button"
//               onClick={backBtnClick}
//             >
//               ←
//             </button>
//             <button
//               className="rw-next-btn"
//               type="button"
//               onClick={frontBtnClick}
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Reviews.css";
import { customerReviews } from "../scripts/reveiew";
import 'swiper/css';

// Install Swiper modules

function Reviews() {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = () => {
    // You can perform any additional actions when the slide changes
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <Swiper
          onSwiper={setSwiper}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
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
