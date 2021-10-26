import { AppImages } from '../../../assets';

export interface  CourseTypeList {
  id: number;
  imagePath: any;
  titleTxt: string;
  subTxt: string;
  hourTotal: string;
  reviews: number;
  rating: number;
  price: number;
}

export const COURSE_LIST: CourseTypeList[] = [

  {
    id: 0,
    imagePath: '',
    titleTxt: '',
    subTxt: '',
    hourTotal: '3:20',
    reviews: 0,
    rating: 0,
    price: 0,
  },
  {
    id: 1,
    imagePath: AppImages.java,
    titleTxt: 'Java Advanced',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 180,
  },
  {
    id: 2,
    imagePath: AppImages.javascript,
    titleTxt: 'JavaScript Basic',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 200,
  },
  {
    id: 3,
    imagePath: AppImages.python,
    titleTxt: 'Python',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 60,
  },
  {
    id: 4,
    imagePath: AppImages.ui_ux,
    titleTxt: 'UI/UX Design',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 170,
  },
  {
    id: 5,
    imagePath: AppImages.springboot,
    titleTxt: 'Spring Boot',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 200,
  },
  {
    id: 6,
    imagePath: AppImages.vuejs,
    titleTxt: 'Vue.js Advanced',
    subTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
    hourTotal: '3:20',
    reviews: 422,
    rating: 4.5,
    price: 200,
  },
];
