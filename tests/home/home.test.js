import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomeForm from '../../src/views/home/components/homePage.jsx';
import Immutable from 'immutable';

function setup() {
    const props = {
        sharedStore: Immutable.Map({
            title: 'HomePage Stuff'
        }),
    };
    let wrapper = shallow(<HomeForm {...props} />);
    wrapper.setState({homeStore: Immutable.Map({ firstName: 'John' })});
    return wrapper;
}
describe('HomePage via Enzyme', () => {
    it('render page and h1', () => {
        const wrapper = setup();
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('h1').contains('HomePage Stuff')).toBe(true);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('input').get(0).props.value).toBe('John');
    });
});
