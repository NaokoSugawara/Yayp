import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";


const BusinessFormPage = () => {

  // const dispatch = useDispatch();
  const pageType = useSelector(state => state.ui.pageType);

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

  return (
    <>
      { (pageType === "business") && 

        <div className="outermost">
          {/* <img src="https://s3-media0.fl.yelpcdn.com/assets/public/cityscape_300x233_v2.yji-deccc3d10e15b4494be1.svg" alt="" height="233" width="300"></img> */}
        {/* <form></form> */}
          {/* <div className="business-body">
            <div className="business-body2">
              <div className="business-body3"> */}
                <div className="business-left">
                  <div className="hello">
                    {/* <h1 className="business-h1">
                      Hello! Let's start with your business name
                    </h1> */}
                  </div>
                </div>
                <div className="business-right">
                  {/* <img src="/src/components/BusinessFormPage/business-right.png" width="724" height="625.6"></img> */}
                </div>              
              {/* </div>
            </div>
          </div> */}
        </div>
      }
      


    </>
  )
}

export default BusinessFormPage;