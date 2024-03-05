import {RouteProps} from "react-router-dom";
/*import {HomePage} from "../../../pages/HomePage";*/
import {Root} from "../../../widgets/Root/ui/Root.tsx";
import {ErrorPage} from "../../../widgets/ErrorPage";


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

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Root />,
        errorElement: <ErrorPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <Root />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <ErrorPage/>
    }
}