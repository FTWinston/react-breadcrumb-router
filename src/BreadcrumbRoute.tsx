import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

export type Props = RouteProps<string> & {
    title: React.ReactElement | string;
    includeSearch?: boolean; // Hmm, do we want this?
}

export const BreadcrumbRoute: React.FC<Props> = ({
	component: Component,
	includeSearch = false,
    title,
	render,
    children,
	...props
}) => (
    <Route { ...props } render={ routeProps => (
        <Breadcrumb
            title={title}
            path={routeProps.match.path}
            search={includeSearch ? routeProps.location.search : undefined}
        >
            { Component
                ? <Component { ...routeProps } />
                : render?.(routeProps) ?? children
            }
        </Breadcrumb>
    )} />
);