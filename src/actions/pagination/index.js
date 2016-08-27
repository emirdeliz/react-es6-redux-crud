import * as ActionType from '../../constants/type-action/pagination'

const goPage = (page) => {
    return { type: ActionType.GO_PAGE, page }
}

const nextPage = (id) => {
    return { type: ActionType.NEXT_PAGE }
}

const prevPage = (id, text) => {
    return { type: ActionType.PREV_PAGE }
}

export { goPage, nextPage, prevPage }
