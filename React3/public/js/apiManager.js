import cookie from 'react-cookie';

let token = cookie.load('token');
let postApi = (path) => {
    return path + "?token=" + token;
}
export default {
    'newsList' : postApi('/api/newsList'),
    'newsList2': postApi('/api/newsList2'),
}