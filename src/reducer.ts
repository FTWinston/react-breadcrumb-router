import { Crumb, IdentifiableCrumb } from './crumb'

export type Action = {
    type: 'ADD_CRUMB';
    id: string;
    crumb: Crumb;
} | {
    type: 'UPDATE_CRUMB';
    id: string;
    crumb: Crumb;
} | {
    type: 'REMOVE_CRUMB';
    id: string;
}

export function reducer(state: IdentifiableCrumb[], action: Action): IdentifiableCrumb[] {
    switch (action.type) {
        case 'ADD_CRUMB':
            return [
                ...state,
                { id: action.id, ...action.crumb }
            ]

        case 'UPDATE_CRUMB':
            return state.map(crumb => {
                return crumb.id === action.id
                    ? { id: action.id, ...action.crumb }
                    : crumb
            })

        case 'REMOVE_CRUMB':
            return state.filter(crumb => {
                return crumb.id !== action.id
            })

        default: 
            return state;
    }
}
