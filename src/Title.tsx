import React, { useContext } from 'react'
import { CrumbContext } from './BreadcrumbRouter'

export interface Props {
    className?: string,
    itemElement?: React.ComponentType | keyof JSX.IntrinsicElements;
}

export const Title: React.FC<Props> = props => {
	let { crumbs } = useContext(CrumbContext);

    const Item = props.itemElement ?? 'span';

    const longestPathCrumb = crumbs.reduce(
        (a, b) => a.path.length > b.path.length ? a : b
    );

    const className = props.className === undefined
        ? 'breadcrumbTitle'
        : 'breadcrumbTitle ' + props.className;

    return (
        <Item className={className}>
            {longestPathCrumb.title}
            {props.children}
        </Item>
    );
};
