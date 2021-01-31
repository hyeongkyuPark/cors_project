import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostCode, { AddressData } from 'react-daum-postcode';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import backIcon from './images/icon_back.png';
import closeIcon from './images/x.png';
import noneIcon from './images/none.png';
import { onChangeText, onChangeIcon, onChangeMessage } from './joinSlice';

const Positional = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 4.5vw;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.8em 0;
  & h1 {
    font-size: 4.5vw;
    font-weight: 400;
  }
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5em 0;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

const BackLogo = styled.img`
  position: absolute;
  left: 0.5em;
  width: 1.8em;
  height: 1.8em;
`;

const JoinForm = styled.form`
  width: 90vw;
  display: flex;
  flex-direction: column;
  & > div:last-child {
    margin-bottom: 1.5em;
  }
  `;

const JoinInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  & label {
    font-size: 3.5vw;
    margin-bottom: 0.5em;
  }
  `;

const JoinInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em;
  background: #f9f9f9;
  box-shadow: 3px 3px 10px #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  font-size: 4vw;
  background: none;
  border: none;
  outline: none;
`;

const CheckLogo = styled.img`
  width: 1.2em;
  height: 1.2em;
  flex-grow: 1;
  flex-shrink: 0;
`;

const CertificationRequest = styled.button`
  position: absolute;
  right: 0;
  font-size: 3vw;
  font-weight: bold;
  padding: 1em 1.5em;
  background: #5983ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const CertificationBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
`;

const CertificationInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const CertificationInput = styled.input`
  width: 10em;
  font-size: 4vw;
  padding: 0.5em 1em;
  margin-right: 0.5em;
  background: #f9f9f9;
  box-shadow: 3px 3px 10px #c4c4c4;
  border-radius: 5px;
  border: none;
  outline: none;
`;
const CertificationButton = styled.button`
  font-size: 4vw;
  font-weight: bold;
  padding: 0.5em 1em;
  background: #5983ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const CerticationMessage = styled.p`
  font-size: 2vw;
  color: red;
  margin-top: 1em;
`;

const InputMessage = styled.p`
  font-size: 2vw;
  color: red;
  margin-top: 1em;
`;

const SearchModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #5c5c5c55;
`;

const CloseButton = styled.img`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  top: 0.4em;
  right: 0.4em;
  font-size: 6vw;
`;

const AddressFormBox = styled.div`
  & label {
    display: block;
    font-size: 3.5vw;
    margin-bottom: 0.5em;
  }
  & ${JoinInput}:not(:last-child) {
    margin-bottom: 1em;
  }
  & ${JoinInput} {
    padding: 0.5em;
  }
`;

const AddressSearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
const AddressSearchInput = styled.input`
  width: 10em;
  padding: 0.6em 0.5em;
  background: #f9f9f9;
  box-shadow: 3px 3px 10px #c4c4c4;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-right: 0.5em;
  font-size: 4vw;
`;
const AddressSearchButton = styled.button`
  padding: 0.7em;
  background: #5983ff;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 3.5vw;
`;

function Join():JSX.Element {
  const [showsModal, setShowsModal] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const dispatch = useDispatch();
  const { email,
    certification,
    nickname,
    passwd,
    passwdCheck } = useSelector((state: RootStateOrAny) => state.joinSlice);

  const onClickCertification = () => {
    setShowCertification(true);
  };

  const onClickCertificationCheck = () => {
    if (certification.value === '12345') {
      setShowCertification(false);
      dispatch(onChangeMessage({ name: 'email', value: '인증이 완료 되었습니다.' }));
      dispatch(onChangeMessage({ name: 'certification', value: '' }));
      dispatch(onChangeIcon({ name: 'certification', value: 'true' }));
    } else {
      dispatch(onChangeMessage({ name: 'certification', value: '인증번호를 확인해주세요.' }));
    }
  };

  const onClickOpenModal = () => {
    setShowsModal(true);
  };

  const onClickCloseModal = () => {
    setShowsModal(false);
  };

  const OnCompleteSelectAddress = (data: AddressData) => {
    console.log(data);
    setShowsModal(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case ('email'):
        if (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(e.target.value)) {
          dispatch(onChangeIcon({ name: e.target.name, value: 'check' }));
          dispatch(onChangeMessage({ name: e.target.name, value: '' }));
        } else if (e.target.value) {
          dispatch(onChangeIcon({ name: e.target.name, value: 'x' }));
          dispatch(onChangeMessage({ name: e.target.name, value: '이메일 형식이 아닙니다.' }));
        } else {
          dispatch(onChangeIcon({ name: e.target.name, value: 'none' }));
          dispatch(onChangeMessage({ name: e.target.name, value: '' }));
        }
        break;
      default:
        break;
    }

    if (e.target.name === 'email'
      || e.target.name === 'certification'
      || e.target.name === 'nickname'
      || e.target.name === 'passwd'
      || e.target.name === 'passwdCheck'
    ) {
      dispatch(onChangeText({ name: e.target.name, value: e.target.value }));
    }
  };

  const testFunc = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <Positional>
      <Header>
        <BackLogo src={backIcon} />
        <h1>회원가입</h1>
      </Header>
      <Main>
        <JoinForm method="post">
          <JoinInputBox>
            <label htmlFor="email">이메일</label>
            <JoinInput>
              <Input required type="email" id="email" name="email" onChange={onChangeInput} value={email.value} />
              <CheckLogo src={`/images/icons/${email.status}.png`} />
              <CertificationRequest style={{ display: email.status === 'check' && certification.status !== 'true' ? 'block' : 'none' }} type="button" onClick={onClickCertification}>인증요청</CertificationRequest>
            </JoinInput>
            <InputMessage>{email.message}</InputMessage>
            <CertificationBox style={{ display: showCertification ? 'flex' : 'none' }}>
              <CertificationInputBox>
                <CertificationInput name="certification" onChange={onChangeInput} value={certification.value} />
                <CertificationButton type="button" onClick={onClickCertificationCheck}>확인</CertificationButton>
              </CertificationInputBox>
              <CerticationMessage>{certification.message}</CerticationMessage>
            </CertificationBox>
          </JoinInputBox>
          <JoinInputBox>
            <label htmlFor="nickname">닉네임</label>
            <JoinInput>
              <Input required type="text" id="nickname" name="nickname" onChange={onChangeInput} value={nickname.value} onFocusCapture={testFunc} />
              <CheckLogo src={noneIcon} />
            </JoinInput>
          </JoinInputBox>
          <JoinInputBox>
            <label htmlFor="passwd">비밀번호</label>
            <JoinInput>
              <Input required type="password" id="passwd" name="passwd" onChange={onChangeInput} value={passwd.value} />
              <CheckLogo src={noneIcon} />
            </JoinInput>
          </JoinInputBox>
          <JoinInputBox>
            <label htmlFor="passwdCheck">비밀번호 확인</label>
            <JoinInput>
              <Input required type="password" id="passwdCheck" name="passwdCheck" onChange={onChangeInput} value={passwdCheck.value} />
              <CheckLogo src={noneIcon} />
            </JoinInput>
          </JoinInputBox>
          <AddressFormBox>
            <label>주소</label>
            <AddressSearchBox>
              <AddressSearchInput disabled onClick={onClickOpenModal} />
              <AddressSearchButton type="button" onClick={onClickOpenModal}>우편번호 검색</AddressSearchButton>
            </AddressSearchBox>
            <JoinInput>
              <Input type="text" disabled placeholder="상세 주소" />
            </JoinInput>
            <JoinInput>
              <Input type="text" placeholder="나머지 주소" />
            </JoinInput>
          </AddressFormBox>
        </JoinForm>
      </Main>
      <SearchModal style={{ display: showsModal ? 'flex' : 'none' }}>
        <CloseButton src={closeIcon} onClick={onClickCloseModal} />
        <DaumPostCode onComplete={OnCompleteSelectAddress} />
      </SearchModal>
    </Positional>
  );
}

export default Join;
