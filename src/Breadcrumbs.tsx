import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CrumbContext } from './BreadcrumbRouter'

export interface Props {
    className?: string,
    separator?: React.ReactElement | string,
    includeLast?: boolean;
    rootElement?: React.ComponentType | keyof JSX.IntrinsicElements;
    itemElement?: React.ComponentType | keyof JSX.IntrinsicElements;
}

export const Breadcrumbs: React.FC<Props> = props => {
	let { crumbs } = useContext(CrumbContext);

    const Root = props.rootElement ?? 'nav';

    const Item = props.itemElement ?? 'span';

    const separator = props.separator;

    crumbs = crumbs.sort((a, b) => a.path.length - b.path.length);

    if (props.includeLast === false) {
        crumbs.splice(crumbs.length - 1, 1);
    }

    const className = props.className === undefined
        ? 'breadcrumbs'
        : 'breadcrumbs ' + props.className;

    return (
        <Root className={className}>
            {crumbs.map((crumb, i) => (
                <Item key={ crumb.id } className="breadcrumbs__section">
                    <NavLink
                        exact
                        className="breadcrumbs__crumb"
                        activeClassName="breadcrumbs__crumb--active"
                        to={crumb}
                    >
                        { crumb.title }
                    </NavLink>

                    { separator !== undefined && i < crumbs.length - 1 ? (
                        <span className="breadcrumbs__separator">{separator}</span>
                    ) : null }
                </Item>
            ))}
            {props.children}
        </Root>
    );
};
