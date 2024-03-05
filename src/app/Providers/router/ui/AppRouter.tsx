import {memo} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig.tsx";
export const AppRouter = memo(() => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    )
})