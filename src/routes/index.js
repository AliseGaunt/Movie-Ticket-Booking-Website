// Layouts
import { HeaderOnly } from '@/components/Layout';
import Header from '@/components/Layout/DefaultLayout/Header';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MovieDetail from '@/pages/MovieDetail';
import Schedule from '@/pages/Schedule';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/moviedetail', component: MovieDetail, layout: HeaderOnly},
    { path: '/schedule', component: Schedule, layout: null },
];

const privateRoutes = []; //need login

export { publicRoutes, privateRoutes };
