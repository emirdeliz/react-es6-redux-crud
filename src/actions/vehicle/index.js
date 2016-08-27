import * as ActionType from '../../constants/type-action/vehicle'

const list = (currentPage) => {
    return { type: ActionType.LIST, currentPage }
}

const select = (id, isSelect) =>  {
    return { type: ActionType.SELECT, id, isSelect }
}

const selectAll = () => {
    return { type: ActionType.SELECT_ALL }
}

export { list, select, selectAll }
