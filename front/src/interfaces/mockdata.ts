import faker from 'faker';
import { marketListInterface } from './MarketInterface';
import { AddBookPostInterface, PostListInterface, articleDetailInterface } from './PostList.interface';

export const dummyAddBookPost = (data: AddBookPostInterface) => ({
  articleId: faker.random.number(),
  memberId: data.memberId, // 내가 넣어줄 값
  rprice: data.rprice, // 내가 넣어줄 값
  writeDate: new Date(),
  progress: data.progress, // 내가 넣어줄 값
  title: data.title, // 내가 넣어줄 값
  thumnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEqDnzERi5Aa-o2Qk7r-GmibgwZWM0wV4utkTJZBRNULFk8KwNzUKtPXvgPE&usqp=CAc', // 내가 넣어줄 값
  images: [], // 내가 넣어줄 값
  content: data.content, // 내가 넣어줄 값
  category: data.category, // 내가 넣어줄 값
  tprice: data.tprice, // 내가 넣어줄 값
  division: data.division, // 내가 넣어줄 값
});

export const dummyPost: AddBookPostInterface = {
  memberId: 3, // 작성자
  rprice: 13000, // 판매가격
  tprice: 16000, // 원래가격
  content: '두번만 읽은 책입니다', // 내용
  progress: 'POSTING', // 게시글 상태
  title: '진격의거인', // 책제목
  thumnail: 'http://image.yes24.com/momo/TopCate3025/MidCate007/302460746.jpg',
  images: ['https://blog.kakaocdn.net/dn/28NKv/btqFjFQr9pe/n0TKtuuV3zmBSTF1olKqIK/img.jpg', 'https://www.hanbit.co.kr/data/editor/20200706083421_vfsgqsvu.jpg', 'https://www.hanbit.co.kr/data/editor/20200705234134_skcbzgms.jpg'],
  category: '국내도서>자기계발', // 카테고리 키
  division: 'SALE', // 구매 판매 구분
};

export const dummyBookPost: PostListInterface = {
  data: [],
};
export const dummyDetailBookPost: articleDetailInterface = {
  articleId: 1,
  memberId: 2,
  countDAO: {
    chatCount: 10,
    countId: 2,
    views: 3,
    wishCount: 5,
  },
  title: '이것이 MYSQL 이다',
  content: '한번밖에 안읽은 책입니다. 상태 깨끗하고요.',
  writeDate: new Date('2020-10-11'),
  rprice: 13000,
  tprice: 28000,
  progress: 'POSTING',
  category: {
    cid: 2435, oneDepth: '국내도서', twoDepth: '자기계발', threeDepth: 'IT서적', fourDepth: '', fiveDepth: '',
  },
  division: 'SALE',
  thumbnail: 'http://image.yes24.com/momo/TopCate3025/MidCate007/302460746.jpg',
  image: ['https://blog.kakaocdn.net/dn/28NKv/btqFjFQr9pe/n0TKtuuV3zmBSTF1olKqIK/img.jpg', 'https://www.hanbit.co.kr/data/editor/20200706083421_vfsgqsvu.jpg', 'https://www.hanbit.co.kr/data/editor/20200705234134_skcbzgms.jpg'],
};
export const generateDummyPost = (Postnumber: number) => Array(Postnumber).fill(0).map(() => (
  {
    articleId: faker.random.number(),
    countDAO: {
      chatCount: 2,
      countId: 2,
      views: 2,
      wishCount: 3,
    },
    title: faker.commerce.productName(),
    writeDate: new Date(),
    tprice: 20000,
    progress: 'POSTING',
    category: {
      cid: faker.random.number(), oneDepth: '국내도서', twoDepth: '소설/시/희곡', threeDepth: '', fourDepth: '', fiveDepth: '',
    },
    image: faker.random.image(),
    nickname: faker.name.findName(),
    market: null,
  }
));

export const dummyMarket:marketListInterface = {
  data: [{
    marketId: 1,
    marketName: '찬미마켓',
    marketIntro: '저렴하게 파는 친절한 마켓입니다',
    marketImage: 'https://post-phinf.pstatic.net/MjAxNzA4MDVfMTIx/MDAxNTAxOTE2MzM0MDgz.nttKTl9M6abrzvwG-GPeedh606JPCAI-FeIOoooYVfQg.mNUGyps1wVC027zi3XVMVlzc502OXoipDD2cQ6Mj2jsg.JPEG/mug_obj_201708051558546888.jpg?type=w1080',
  },
  {
    marketId: 2,
    marketName: '오이마켓',
    marketIntro: '저렴하게 파는 친절한 마켓입니다',
    marketImage: 'https://post-phinf.pstatic.net/MjAxNzA4MDVfMTIx/MDAxNTAxOTE2MzM0MDgz.nttKTl9M6abrzvwG-GPeedh606JPCAI-FeIOoooYVfQg.mNUGyps1wVC027zi3XVMVlzc502OXoipDD2cQ6Mj2jsg.JPEG/mug_obj_201708051558546888.jpg?type=w1080',
  }],
};
