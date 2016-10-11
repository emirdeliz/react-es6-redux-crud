import reducer from '../../reducers';
import * as ChartMock from '../../__mock__/chart';

describe('Reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ chart: ChartMock.default });
    });
});
