import {Link, LinkProps} from "react-router-dom";
import {FC, memo, PropsWithChildren} from "react";

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> =  memo((props) => {
    const {to, className, children, ...otherProps} = props

    return (
        <Link
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});