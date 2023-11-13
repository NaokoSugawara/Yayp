
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modalType) => ({
    type: OPEN_MODAL,
    payload: modalType
});

export const closeModal = () => ({
    type: CLOSE_MODAL 
});

const initialState = { 
    loading: false,
    modal: false,
    login: false,
    signup: false
};

const uiReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case OPEN_MODAL:
            // debugger
            newState.modal = action.payload;
            return newState;
        case CLOSE_MODAL:
            newState.modal = false;
            return newState;
        // return { ...state, user: action.payload };
        // case REMOVE_CURRENT_USER:
        // return { ...state, user: null };
        default:
            return state;
    }
};

export default uiReducer;
  