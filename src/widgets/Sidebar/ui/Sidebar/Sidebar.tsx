import {useMemo} from "react";
import {SidebarItemsList} from "../../model/items.ts";
import {SidebarItem} from "../SidebarItem/SidebarItem.tsx";
export const Sidebar = () => {
    const items = useMemo(() => {
        return (
            SidebarItemsList.map((item) => (
                <SidebarItem item={item} key={item.path} />
            ))
        )
    }, []);

    return (
        <>
           <div className={'sidebar'}>
               <div className="sidebar__items">
                   {items}
               </div>
           </div>
        </>
    )
}