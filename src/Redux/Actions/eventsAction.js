import * as actions from './actionType';
export const addEvent = (payload) => async (dispatch) => {
  dispatch({
    type: actions.ADD_EVENT_REQUEST,
  });

  try {
    dispatch({
      type: actions.ADD_EVENT_SUCCESS,
      payload
    });
  } catch (error) {
    dispatch({
      type: actions.ADD_EVENT_FAILURE,
    });
  }
}



