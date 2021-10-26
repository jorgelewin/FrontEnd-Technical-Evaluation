import { AppImages } from '../../../assets';
import { CourseTypeList, COURSE_LIST } from './course_list_data';



//Interface with props user
export interface UserList {
    id: number;
    imagePath: any;
    fullName: string;
    userName: string;
    password: string;
    country: string;
    course: Array<CourseTypeList>
}

//Array users
export const USER_LIST: UserList[] = [

    {
        id: 0,
        imagePath: '',
        fullName: '',
        userName: '',
        password: '0',
        country: '0',
        course: []
    },
    {
        id: 1,
        imagePath: AppImages.userImage,
        fullName: 'Javier Hoylos',
        userName: 'javierhoylos@gmail.com',
        password: '123456',
        country: 'Bolivia',
        course: []
    },
    {
        id: 2,
        imagePath: AppImages.userImage,
        fullName: 'Jorge Lewin',
        userName: 'jorgelewin@gmail.com',
        password: '123456',
        country: 'Argentina',
        course: []
    },

];

//Function for add user logged and return
export function addUserLoggedandReturn(user: UserList) {
    const userLogged = user;

    return userLogged

}

//Function for add new user
export function addUser(user: UserList) {

    USER_LIST.push(user);

}

//Function for add an new course to user 
export function addCourse(course: CourseTypeList, user: UserList) {
    let data: CourseTypeList = course;

    user.course.push(data);


}
