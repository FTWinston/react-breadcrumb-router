import React from 'react';
import { useBreadcrumb } from './useBreadcrumb';

export interface Props {
    title: React.ReactElement | string;
}

export const Breadcrumb: React.FC<Props> = (props) => {
    useBreadcrumb(props.title);

    return <> {props.children} </>;
};
