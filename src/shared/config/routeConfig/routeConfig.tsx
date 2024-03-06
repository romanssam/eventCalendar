import {RouteProps} from "react-router-dom";
import {ErrorPage} from "../../../widgets/ErrorPage";
import {HomePage} from "../../../pages/HomePage";
import {LoginPage} from "../../../pages/LoginPage";

export type AppRouterProps = RouteProps & {
    authOnly: boolean;
}

export enum AppRoutes {
    LOGIN = 'login',
    MAIN = 'main',

    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',

    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
        authOnly: true
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <ErrorPage/>,
        authOnly: false
    }
}