export interface Crumb {
    pathname: string;
    search?: string;
    title: React.ReactElement | string;
};

export type IdentifiableCrumb = Crumb & {
    id: string,
};