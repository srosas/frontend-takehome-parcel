import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../components/Search'
import Gem from '../components/Gem'
import Gems from '../components/Gems'

configure({ adapter: new Adapter() });

//Wasn't able to finisuh up tests. Had an issue running them in the current environment as it doesn't recognize the react components
//Wanted to add tests to make sure the correct list (Saved Gems or Searched Gems) renders correctly based on switching between Links

describe('Search Component', () => {
  it('should render form with input and button', () => {
    shallow(<Search />);
  })
})

describe('Gem Component', () => {
  it('should render Gem within Gems Component', () => {
    const wrapper = shallow(<Gems />);
    expect(wrapper.find(Gem)).toBeGreaterThan(0);
  })
})