import React from 'react';
import type { LocationDescriptorObject, Pathname } from 'history';

export type Crumb = LocationDescriptorObject<any> & {
    pathname: Pathname; // This was optional: make it required.
    title: React.ReactElement | string; // This is new.
};

export type IdentifiableCrumb = Crumb & {
    id: string,
};