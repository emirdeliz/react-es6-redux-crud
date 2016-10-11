import * as ActionType from '../../constants/type-action/pagination'

const initialState = {
    currentPage: 0
}

 const pagination = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PREV_PAGE:
            return Object.assign({}, state, { currentPage: --state.currentPage })

        case ActionType.NEXT_PAGE:
            return Object.assign({}, state, { currentPage: ++state.currentPage })

        case ActionType.GO_PAGE:
            return Object.assign({}, state, { currentPage: action.page })

        default:
            return state
    }
}

export default pagination
