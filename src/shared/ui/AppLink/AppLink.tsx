import {LinkProps, NavLink} from "react-router-dom";
import {FC, memo, PropsWithChildren} from "react";

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> =  memo((props) => {
    const {to, className, children, ...otherProps} = props;
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "link-active" : "")}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});