import React from 'react';
import { shallow } from 'enzyme';

import HeaderComponent from '../../screens/header/component';
import BodyComponent from '../../screens/body/component';
import FooterComponent from '../../screens/footer/component';

describe('Component', () => {
    it('should render HeaderComponent', () => {
        const enzymeWrapper = shallow(<HeaderComponent />);
        expect(enzymeWrapper.find('.title').text()).toBe('Exemplo Gráfico React');
    });

    it('should render BodyComponent', () => {
        const enzymeWrapper = shallow(<BodyComponent />);
        expect(enzymeWrapper.find('.container').length).toBe(1);
    });

    it('should render FooterComponent', () => {
        const enzymeWrapper = shallow(<FooterComponent />);
        expect(enzymeWrapper.find('.social-icon').length).toBe(4);
    });
});
