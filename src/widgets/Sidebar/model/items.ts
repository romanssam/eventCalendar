import {RoutePath} from "../../../shared/config/routeConfig/routeConfig.tsx";

export interface SidebarItemType {
    path: string;
    text: string;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная'
    },
    {
        path: RoutePath.login,
        text: 'Логин'
    },
]