import {
  componentsVisibilityState,
  componentsVisibilityAction,
} from '../../utils/types';
import {
  SET_IS_PRELOADER_SHOW,
  SET_IS_MOBILE_HEADER_POPUP_OPEN
} from './../actions/actionTypes';

const initialState: componentsVisibilityState = {
  isPreloaderShow: false,
  isMobileHeaderPopupOpen: false
};

export default function componentsVisibilityReducer(
  state: componentsVisibilityState = initialState,
  action: componentsVisibilityAction
): componentsVisibilityState {
  switch(action.type) {
    case SET_IS_PRELOADER_SHOW:
      return {
        ...state,
        isPreloaderShow: action.isPreloaderShow!
      };
    case SET_IS_MOBILE_HEADER_POPUP_OPEN:
      return {
        ...state,
        isMobileHeaderPopupOpen: action.isMobileHeaderPopupOpen!
      };
    default:
      return state
  };
};
