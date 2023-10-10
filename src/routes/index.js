import HeaderOnly from '~/components/Layout/HeaderOnly';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UploadProfile from '~/pages/UploadProfile';
import Login from '~/pages/Login';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: UploadProfile, layout: HeaderOnly },

    { path: '/login', component: Login, layout: null },
];

export const privateRoutes = [];
