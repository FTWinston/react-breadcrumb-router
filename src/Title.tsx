import React, { useContext } from 'react';
import { CrumbContext } from './BreadcrumbRouter';

export interface Props {
    className?: string;
    itemElement?: React.ComponentType | keyof JSX.IntrinsicElements;
}

export const Title: React.FC<Props> = (props) => {
    let { crumbs } = useContext(CrumbContext);

    const Item = props.itemElement ?? 'h1';

    if (crumbs.length === 0) {
        return null;
    }

    const longestPathCrumb = crumbs.reduce((a, b) =>
        a.pathname.length > b.pathname.length ? a : b
    );

    const className =
        props.className === undefined
            ? 'breadcrumbTitle'
            : 'breadcrumbTitle ' + props.className;

    return (
        <Item className={className}>
            {longestPathCrumb.title}
            {props.children}
        </Item>
    );
};
