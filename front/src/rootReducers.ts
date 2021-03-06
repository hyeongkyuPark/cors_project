import { combineReducers } from '@reduxjs/toolkit';
import postSlice from './features/postList/postSlice';
import addPostSlice from './features/addPost/addPostSlice';
import detailViewSlice from './features/detailPostView/detailViewSlice';
import userSlice from './features/login/userSlice';
import mySaleArticleSlice from './features/mySlaeArticle/mySaleArticleSlice';
import myPurchaseArticleSlice from './features/myPurchaseArticle/myPurchaseArticleSlice';
import noticeSlice from './features/notice/noticeSlice';
import wishListSlice from './features/wishList/wishListSlice';

export default combineReducers({
  postSlice,
  detailViewSlice,
  addPostSlice,
  userSlice,
  mySaleArticleSlice,
  myPurchaseArticleSlice,
  noticeSlice,
  wishListSlice,
});
