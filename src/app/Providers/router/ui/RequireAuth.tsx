import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig.tsx";
import {useLocation, Navigate} from "react-router-dom";
import {ReactElement, ReactNode} from "react";

export interface RequireAuthProps {
    children: ReactNode | ReactElement;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;

    let isAuth = true;
    let location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    }

    return children;
}