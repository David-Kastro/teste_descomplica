import React from 'react';
import App from './App';
import Personagem from './components/Personagem';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../services/starwars-service");

it('Testing if components render properly', async done => {

  await act( async () => {
    const wrapper = mount(<App />);

    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find(Personagem).length).toEqual(10);
      done();
    })
  })
});
