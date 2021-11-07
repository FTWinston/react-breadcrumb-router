import React from 'react';
import { Route, RouteProps, useLocation } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

export type Props = RouteProps & {
    title: React.ReactElement | string;
    includeSearch?: boolean; // Hmm, do we want this?
};

export const BreadcrumbRoute: React.FC<Props> = ({
    element,
    includeSearch = false,
    title,
    children,
    ...props
}) => {
    const CrumbElement = () => {
        const location = useLocation();

        return (
            <Breadcrumb
                title={title}
                path={location.pathname}
                search={includeSearch ? location.search : undefined}
            >
                {element ?? children}
            </Breadcrumb>
        );
    };

    return <Route {...props} element={<CrumbElement />} />;
};
