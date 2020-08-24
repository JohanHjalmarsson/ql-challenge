import React from 'react'
import ReactDOM from 'react-dom'
import Container, {ids} from '../app/container'
import Form from '../app/form'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container />, div)
})

it('should submit', () => {
    const mock = {
        number: 'number',
        name: 'name',
        month: 'month',
        year: 'year',
        cvc: 'cvc'
    }
    const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
    const wrapper = shallow(<Form errors={mock} values={mock} onSubmit={handleSubmit} />);
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toBeCalledTimes(1);
})

