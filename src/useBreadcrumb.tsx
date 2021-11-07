import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { v4 as UUID } from 'uuid';
import { CrumbContext } from './BreadcrumbRouter';
import { Crumb } from './crumb';

export function useBreadcrumb(title: React.ReactElement | string) {
    const [id] = useState(() => UUID());

    const crumbPath = useResolvedPath('');

    const { dispatch } = useContext(CrumbContext);

    const crumb: Crumb = useMemo(
        () => ({
            ...crumbPath,
            title,
        }),
        [crumbPath.pathname, crumbPath.search, crumbPath.hash, title]
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
};
