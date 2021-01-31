import { createSlice } from '@reduxjs/toolkit';

interface testInterface {
  payload: {
    name: 'email' | 'certification' | 'nickname' | 'passwd' | 'passwdCheck',
    value: string
  };
  type: string;
}

const joinSlice = createSlice({
  name: 'join',
  initialState: {
    email: {
      value: '',
      status: 'none',
      message: '',
    },
    certification: {
      value: '',
      status: 'false',
      message: '',
    },
    nickname: {
      value: '',
      status: 'none',
      message: '',
    },
    passwd: {
      value: '',
      status: 'none',
      message: '',
    },
    passwdCheck: {
      value: '',
      status: 'none',
      message: '',
    },
  },
  reducers: {
    onChangeText(state, action: testInterface) {
      state[action.payload.name].value = action.payload.value;
    },
    onChangeIcon(state, action: testInterface) {
      state[action.payload.name].status = action.payload.value;
    },
    onChangeMessage(state, action: testInterface) {
      state[action.payload.name].message = action.payload.value;
    },
  },
});

export const {
  onChangeText,
  onChangeIcon,
  onChangeMessage,
} = joinSlice.actions;

export default joinSlice.reducer;
