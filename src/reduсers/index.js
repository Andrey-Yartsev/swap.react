import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as fromHistory from './history'
import filter from './filter'
import wallets from './wallets'
import modals from './modals'

export default combineReducers({
    filter,
    wallets,
    modals,
    router: routerReducer
});

export function getFilteredHistory(state) {
    return fromHistory.getFilteredHistory(state.wallets, state.filter);
}