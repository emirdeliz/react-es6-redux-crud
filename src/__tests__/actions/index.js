import * as ChartActions from '../../actions/chart';
import * as ChartActionsType from '../../constants/type-action/chart';

describe('Actions', () => {
    it('should create an action to list a data', () => {
        const expectedAction = {
            type: ChartActionsType.LIST,
        };
        expect(ChartActions.default()).toEqual(expectedAction);
    });
});
