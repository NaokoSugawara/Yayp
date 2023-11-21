import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness, getBusiness } from "../../store/business";
import './BusinessShowPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BusinessCarousel from "../BusinessCarousel";


const BusinessShowPage = () => {

  const {id} = useParams();
  // const pageType = useSelector(state => state.ui.pageType);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBusiness(id));
  }, [dispatch, id]);


  // const business = useSelector(getBusiness(id));
  const business = useSelector(state => state.business[id]);


  // if (sessionUser) {
  //   login = true;
  //   return <Redirect to="/" login={login} />;
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.register({ name, address, city, state, zipcode, stars, review_count, categories, hours, owner_id }))
  //     .catch(async (res) => {
  //       let data;
  //       try {
  //         // .clone() essentially allows you to read the response body twice
  //         data = await res.clone().json();
  //       } catch {
  //         data = await res.text(); // Will hit this case if, e.g., server is down
  //       }
  //       if (data?.errors) setErrors(data.errors);
  //       else if (data) setErrors([data]);
  //       else setErrors([res.statusText]);
  //     });

  // };

  if (!business) {
    return null;
  }

//  debugger
  return (
    <>
      {/* { (pageType === "business") &&  */}

        <div className="pictures">
            {/* { business.photos.map ((photo) => <img height="426px" src={photo}></img>)} */}
            <BusinessCarousel images={business.photos} />
          <div className="pictures-inner">
            <div className="details">
              <div className="details2">
                <div className="restaurant-logo">
                  { business.logo && <img class="restaurant-logo-img" 
                    height="100" 
                    width="100" 
                    src={business.logo} 
                    alt="Business Logo" /> }
                </div>
                <div className="restaurant-details">
                  <div className="restaurant-name">
                    <h1 className="restaurant-name-h1">
                      {business.name}
                    </h1>
                  </div>
                  <div className="rates"></div>
                  <div className="categories"></div>
                  <div className="hours">
                    <div className="hours-left1">
                     <div className="hours-left2">
                      <div className="hours-left3">
                        <span className="open-span">open</span>
                        <span className="hours-span">{business.hours}</span>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="see-all">
              <span className="see-all-span">
                <a className="see-all-a">see all photos</a>
              </span>
            </div>
          </div>
          {/* <img src="https://s3-media0.fl.yelpcdn.com/assets/public/cityscape_300x233_v2.yji-deccc3d10e15b4494be1.svg" alt="" height="233" width="300"></img> */}
        </div>
        <div className="middle-line">
        </div>
        <div className="below1">
          <div className="below2">
            <div className="below-contents-outer">
              <div className="contents-left1">
                <div className="review-etc">
                  <a href="/writeareview/biz/VVYea3NzbklOyHEzSEavWw?return_url=%2Fbiz%2FVVYea3NzbklOyHEzSEavWw&amp;review_origin=biz-details-war-button" 
                    className="review-a" 
                    data-activated="false" 
                    data-button="true">
                    <div className="review-a-div">
                      <div className="review-star">
                        <span className="review-star-span">
                          <svg width="24" height="24" class="icon_svg">
                            <path d="M17.87 22a.93.93 0 0 1-.46-.12L12 19.08l-5.41 2.84a1 1 0 0 1-1-.08 1 1 0 0 1-.4-1l1-6-4.39-4.26a1 1 0 0 1 .56-1.7L8.4 8l2.7-5.48a1 1 0 0 1 1.8 0L15.6 8l6 .88a1 1 0 0 1 .56 1.7l-4.38 4.27 1 6a1 1 0 0 1-1 1.17l.09-.02ZM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 0 1 .29-.89l3.3-3.21-4.56-.72a1 1 0 0 1-.79-.54l-2-4.14-2 4.14a1 1 0 0 1-.75.54l-4.56.67L8 13.78a1 1 0 0 1 .29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0 1 12 17Z">
                            </path>
                          </svg>
                        </span> 
                      </div>
                      <div className="writeareview">
                        <span className="reset-styles writeareview-span">
                          Write a review
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contents-right">
                <aside className="orderfood-aside">
                  <div className="orderfood-aside-top">
                    <div className="orderfood-aside-below">
                      <div className="orderfood-aside-section">
                        <div className="orderfood-aside-section-inner1">
                          <div className="orderfood-aside-section-inner2">
                            <div className="orderfood-text">
                              <div className="orderfood-text2">
                                <h2 className="orderfood-text-h2">Order Food</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default BusinessShowPage;