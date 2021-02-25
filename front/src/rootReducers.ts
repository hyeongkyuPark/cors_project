import { combineReducers } from '@reduxjs/toolkit';
import postSlice from './pages/post/postSlice';
import marketSlice from './pages/market/marketSlice';
import detailViewSlice from './pages/post/detailPostView/detailViewSlice';
import myPageSlice from './pages/myPage/myPageSlice';
import userSlice from './pages/signIn/userSlice';

export default combineReducers({
  postSlice,
  marketSlice,
  detailViewSlice,
  userSlice,
  myPageSlice,
});
