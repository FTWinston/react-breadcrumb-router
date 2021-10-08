import React, { useContext, useEffect, useRef, useState } from 'react'
import { v4 as UUID } from 'uuid'
import { CrumbContext } from './BreadcrumbRouter'
import { Crumb } from './crumb';

interface Props {
	data: Crumb,
	hidden?: boolean,
}

export const Breadcrumb: React.FC<Props> = props => {
	const [id] = useState(() => UUID());

	const { dispatch } = useContext(CrumbContext);

	useEffect(() => {
		if (props.hidden) {
			return;
		}
		
		dispatch({ type: 'ADD_CRUMB', id, crumb: props.data });
		return () => dispatch({ type: 'REMOVE_CRUMB', id });
	}, [props.hidden]);

	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender) {
			firstRender.current = false;
			return;
		}

		if (props.hidden !== true) {
			dispatch({ type: 'UPDATE_CRUMB', id, crumb: props.data });
		}
	}, [props.data]);

	return <>{props.children}</>
}
