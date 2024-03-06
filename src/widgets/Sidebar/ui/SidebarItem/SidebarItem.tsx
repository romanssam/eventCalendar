import {SidebarItemType} from "../../model/items.ts";
import {AppLink} from "../../../../shared/ui/AppLink/AppLink.tsx";

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item} = props;

    return (
        <AppLink to={item.path} key={item.path}>
            {item.text}
        </AppLink>
    )
}