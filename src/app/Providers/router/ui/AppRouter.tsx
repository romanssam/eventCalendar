import {memo, useCallback} from "react";
import {Route, Routes} from "react-router-dom";
import {AppRouterProps, routeConfig} from "../../../../shared/config/routeConfig/routeConfig.tsx";
import {RequireAuth} from "./RequireAuth.tsx";
export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        return (
            <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element} />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
})