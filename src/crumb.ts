import { Path } from 'react-router-dom';

export interface Crumb extends Path {
    title: React.ReactElement | string;
}

export type IdentifiableCrumb = Crumb & {
    id: string;
};
