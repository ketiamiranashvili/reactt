
import routes from "../constants/routes";
import Home from "../page/home/Home";
import SignIn from "../page/sign-in/SignIn";
import Movies from "../page/movies/Movies";
import Register from "../page/register/Register";
import AuthGuard from "../guard/AuthGuard";


const appRoutes = [
    {
        path: routes.home,
        Component : Home,
        Guard: AuthGuard,
    },
    {
        path : routes.movies,
        Component: Movies,
        Guard: AuthGuard,
    
    },
    {
        path : routes.signIn,
        Component: SignIn,
    },
    {
        path: routes.register,
        Component : Register,
    },
];

export default appRoutes;