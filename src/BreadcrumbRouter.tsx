import React, { useMemo, useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { IdentifiableCrumb } from './crumb';
import { Action, reducer } from './reducer';

interface ContextState {
    crumbs: IdentifiableCrumb[];
    dispatch: React.Dispatch<Action>;
}

export const CrumbContext = React.createContext<ContextState>({
    crumbs: [],
    dispatch: () => {}
});

export const BreadcrumbRouter: React.FC = props => {
    const [crumbs, dispatch] = useReducer(reducer, []);
    
    const contextValue = useMemo(() => {
        return { crumbs, dispatch };
    }, [crumbs, dispatch]);

    return (
        <BrowserRouter>
            <CrumbContext.Provider value={contextValue}>
                {props.children}
            </CrumbContext.Provider>
        </BrowserRouter>
    );
}
