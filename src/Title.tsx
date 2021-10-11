import React, { useContext } from 'react'
import { CrumbContext } from './BreadcrumbRouter'
import { IdentifiableCrumb } from './crumb';

export interface Props {
    className?: string,
    itemElement?: React.ComponentType | keyof JSX.IntrinsicElements;
}

export const Title: React.FC<Props> = props => {
	let { crumbs } = useContext(CrumbContext);

    const Item = props.itemElement ?? 'span';

    const longestPathCrumb = crumbs.reduce(
        (a: IdentifiableCrumb, b: IdentifiableCrumb) => a.path.length > b.path.length ? a : b, null
    );

    const className = props.className === undefined
        ? 'breadcrumbTitle'
        : 'breadcrumbTitle ' + props.className;

    if (longestPathCrumb === null) {
        return null;
    }

    return (
        <Item className={className}>
            {longestPathCrumb.title}
            {props.children}
        </Item>
    );
};
