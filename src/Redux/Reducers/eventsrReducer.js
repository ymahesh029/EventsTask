// import * as actions from "../Actions/actionTypes";
import * as actions from "../Actions/actionType"

const initialState = {
    loading: false,
    events: []
};

const eventsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.ADD_EVENT_REQUEST:
            return { ...state, loading: true };
        case actions.ADD_EVENT_SUCCESS:
            return { ...state, events: [...state.events, payload], loading: false };
        case actions.ADD_EVENT_FAILURE:
            return { ...state, loading: false };

        default:
            return state;

    }
};

export default eventsReducer;
