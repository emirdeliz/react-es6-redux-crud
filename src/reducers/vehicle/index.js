import * as ActionType from '../../constants/type-action/vehicle'
import VehicleMock from '../../__mock__/vehicle'

const initialState = VehicleMock.vehicles()
const vehicle = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST:
            return state

        case ActionType.SELECT:
            return state.map(vehicle =>
                vehicle.id === action.id ?
                Object.assign({}, vehicle, { isSelect: action.isSelect }) :
                vehicle
            )

        case ActionType.SELECT_ALL:
            const areAllMarked = state.every(vehicle => vehicle.isSelect)
            return state.map(vehicle => Object.assign({}, vehicle, {
                isSelect: !areAllMarked
            }))

        default:
            return state
    }
}

export default vehicle
