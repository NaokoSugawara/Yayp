import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness, getBusiness } from "../../store/business";
import './BusinessShowPage.css';

const BusinessShowPage = () => {

  const {id} = useParams();
  // const pageType = useSelector(state => state.ui.pageType);

  const dispatch = useDispatch();
  // debugger
  useEffect(() => {
    // debugger
    dispatch(fetchBusiness(id));
  }, [dispatch, id]);


  // const business = useSelector(getBusiness(id));
  const business = useSelector(state => state.business[id]);
  // debugger

// debugger
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

              </div>
              <div className="contents-right">

              </div>
            </div>
          </div>
        </div>



        {/* <div className="order-food"></div>

          <div className="half-below-contents1">
            <div className="half-below-contents2">
              <div className="half-below-left">
                <div className="reviews-etc">
                  <a href="/writeareview/biz/VVYea3NzbklOyHEzSEavWw?return_url=%2Fbiz%2FVVYea3NzbklOyHEzSEavWw&amp;review_origin=biz-details-war-button" className="reviews-a" data-activated="false" data-button="true">
                    <div className="reviews-a-div">
                      ☆ Write a review
                    </div>
                  </a>
                </div>
                <div className="half-below-right">
                  
                </div>
              </div>
              
            </div>
          </div> */}
        

    </>
  )
}

export default BusinessShowPage;