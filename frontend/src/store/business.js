

// export const login = ({ business, password }) => async dispatch => {
//     const response = await csrfFetch("/api/session", {
//       method: "POST",
//       body: JSON.stringify({ credential, password })
//     });
//     const data = await response.json();
//     storeCurrentUser(data.user);
//     dispatch(setCurrentUser(data.user));
//     return response;
// //   };

const SHOW_BUSINESS = "SHOW_BUSINESS";

export const showBusiness = business => ({
    type: SHOW_BUSINESS,
    business
  });

// export const getBusiness = businessId => state => {
//     // debugger
//     console.log(state)
//     return state?.business ? state.business[businessId] : null;
// }

export const fetchBusiness = (id) => async (dispatch) => {
    // debugger
    const response = await fetch(`/api/businesses/${id}`);
    // debugger
    if (response.ok) {
        const business = await response.json();
        // debugger
        dispatch(showBusiness(business));
    }
};

  
// const initialState = {
//     business: {}
// };

const businessReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case SHOW_BUSINESS:
            // newState[action.business.id] = action.business;
            // newState.business[action.business.id] = action.business;
            return { ...newState, ...action.business.business }
            // debugger
            // return newState;
            // return {
            //     // ...state,
            //     business: {
            //     //   ...state.business,
            //       [action.business.id]: action.business,
            //     },
            // };
            

        // return { ...state, user: action.payload };
        // case REMOVE_CURRENT_USER:
        // return { ...state, user: null };
        default:
            return state;
    }
};

export default businessReducer;
  