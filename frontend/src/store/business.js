
const OPEN_BUSINESS = "OPEN_BUSINESS";

export const openBusinessPage = () => ({
    type: OPEN_BUSINESS
});

// export const login = ({ business, password }) => async dispatch => {
//     const response = await csrfFetch("/api/session", {
//       method: "POST",
//       body: JSON.stringify({ credential, password })
//     });
//     const data = await response.json();
//     storeCurrentUser(data.user);
//     dispatch(setCurrentUser(data.user));
//     return response;
//   };
  
const initialState = { 
    business: false
};

const businessReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case OPEN_BUSINESS:
            newState.business = true;
            return newState;
        // return { ...state, user: action.payload };
        // case REMOVE_CURRENT_USER:
        // return { ...state, user: null };
        default:
            return state;
    }
};

export default businessReducer;
  