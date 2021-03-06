import axios from 'axios';

export function emailDuplicationAsync(email: string): Promise<boolean> {
  return axios({
    method: 'POST',
    url: '/api/check/email',
    params: { email },
  }).then((res) => true).catch((error) => {
    if (error.response.status !== 400) {
      throw new Error('서버 통신 오류');
    }

    return false;
  });
}

export function emailCertificationAsync(email: string, code: string): Promise<boolean> {
  return axios({
    method: 'POST',
    url: '/api/check/code',
    params: { email, code },
  }).then((res) => true).catch((error) => {
    if (error.response.status !== 400) {
      throw new Error('서버 통신 오류');
    }

    return false;
  });
}

export function nicknameDuplicationAsync(nickname: string): Promise<boolean> {
  return axios({
    method: 'POST',
    url: '/api/check/nickname',
    params: { nickname },
  }).then((res) => true).catch((error) => {
    if (error.response.status !== 400) {
      throw new Error('서버통신에러');
    }
    return false;
  });
}

export function joinRequestAsync(email: string, nickname: string, passwd: string, address: string): Promise<boolean> {
  return axios({
    method: 'POST',
    url: '/api/join',
    params: { email, passwd, nickname, address },
  }).then((res) => (res.status === 200));
}
