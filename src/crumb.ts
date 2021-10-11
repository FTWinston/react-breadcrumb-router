export interface Crumb {
    path: string;
    search?: string;
    title: React.ReactElement | string;
};

export type IdentifiableCrumb = Crumb & {
    id: string,
};