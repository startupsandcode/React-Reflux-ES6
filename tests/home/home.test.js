import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomeForm from '../../src/views/home/components/homePage.jsx';

function setup() {
     const props = {
        title: 'HomePage Stuff'
    };
    return shallow(<HomeForm {...props} />);
}
describe('HomePage via Enzyme', () => {
    it('render page and h1', () => {
        const wrapper = setup();
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('h1').contains('HomePage Stuff')).toBe(true);
    });
});
