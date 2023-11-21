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

                </div>
                <div className="restaurant-details">
                  <div className="restaurant-name">
                    <h1 className="restaurant-name-h1">
                      {business.name}
                    </h1>
                  </div>
                  <div className="rates"></div>
                  <div className="categories"></div>
                  <div className="hours">{business.hours}</div>
                </div>
              </div>
            </div>
            <div className="see-all">
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
                  <a href="/writeareview/biz/VVYea3NzbklOyHEzSEavWw?return_url=%2Fbiz%2FVVYea3NzbklOyHEzSEavWw&amp;review_origin=biz-details-war-button" className="review-a" data-activated="false" data-button="true">
                    <div className="review-a-div">
                      {/* <div className="review-star"> */}
                        {/* <span className="review-star-span"> */}
                          ☆
                        {/* </span> */}
                      {/* </div> */}
                      {/* <div className="writeareview"> */}
                        {/* <span className="writeareview-span"> */}
                          Write a review
                        {/* </span> */}
                      {/* </div> */}
                    </div>
                  </a>
                </div>
              </div>
              <div className="contents-right">

              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default BusinessShowPage;