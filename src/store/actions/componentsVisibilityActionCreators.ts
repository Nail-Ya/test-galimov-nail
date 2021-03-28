import { componentsVisibilityAction } from '../../utils/types';
import {
  SET_IS_PRELOADER_SHOW,
  SET_IS_MOBILE_HEADER_POPUP_OPEN
} from './actionTypes';

export function setIsPreloaderShowActionCreator(isPreloaderShow: boolean): componentsVisibilityAction {
  return {
    type: SET_IS_PRELOADER_SHOW,
    isPreloaderShow
  };
};

export function setIsMobileHeaderPopupOpenActionCreator(isMobileHeaderPopupOpen: boolean): componentsVisibilityAction {
  return {
    type: SET_IS_MOBILE_HEADER_POPUP_OPEN,
    isMobileHeaderPopupOpen
  };
};
