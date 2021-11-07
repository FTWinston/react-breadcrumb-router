import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { v4 as UUID } from 'uuid';
import { CrumbContext } from './BreadcrumbRouter';
import { Crumb } from './crumb';

export interface Props {
    title: React.ReactElement | string;
}

export const Breadcrumb: React.FC<Props> = (props) => {
    const [id] = useState(() => UUID());

    const crumbPath = useResolvedPath('');

    const { dispatch } = useContext(CrumbContext);

    const crumb: Crumb = useMemo(
        () => ({
            ...crumbPath,
            title: props.title,
        }),
        [crumbPath.pathname, crumbPath.search, crumbPath.hash, props.title]
    );

    useEffect(() => {
        dispatch({ type: 'ADD_CRUMB', id, crumb });
        return () => dispatch({ type: 'REMOVE_CRUMB', id });
    }, []);

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        dispatch({ type: 'UPDATE_CRUMB', id, crumb });
    }, [crumb]);

    return <> {props.children} </>;
};
