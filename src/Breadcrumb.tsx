import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import { v4 as UUID } from 'uuid'
import { CrumbContext } from './BreadcrumbRouter'
import { Crumb } from './crumb';

export interface Props extends Crumb {
	hidden?: boolean,
}

export const Breadcrumb: React.FC<Props> = props => {
	const [id] = useState(() => UUID());

	const { dispatch } = useContext(CrumbContext);

	useEffect(() => {
		if (props.hidden) {
			return;
		}
		
		dispatch({ type: 'ADD_CRUMB', id, crumb: props });
		return () => dispatch({ type: 'REMOVE_CRUMB', id });
	}, [props.hidden]);

	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender.current || props.hidden) {
			firstRender.current = false;
			return;
		}
		
		dispatch({ type: 'UPDATE_CRUMB', id, crumb: props });
	}, [props.pathname, props.search]);

	return <> {props.children} </>;
}
