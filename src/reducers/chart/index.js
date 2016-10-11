import * as ActionType from '../../constants/type-action/chart';
import ChartMock from '../../__mock__/chart';

const initialState = ChartMock;
const chart = (state = initialState, action) => {
    switch (action.type) {
    case ActionType.LIST:
        return state;

    default:
        return state;
    }
};

export default chart;
