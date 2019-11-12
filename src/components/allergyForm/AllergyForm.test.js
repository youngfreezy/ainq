import React from 'react';
import ReactDOM from 'react-dom';
import AllergyForm from "./AllergyForm";
import { mount } from 'enzyme';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AllergyForm />, div);

    
    ReactDOM.unmountComponentAtNode(div);
  });

it('the form submits properly and the table renders', function() {
    const result = mount(<AllergyForm></AllergyForm>);
    result.find('#description').simulate('change', {target: {value: 'abcdefghijk'}});
    result.find('#observationDate').simulate('change', {target: {value: '1/1/1/'}});
    result.find('#severity').simulate('change', {target: {value: '10'}});
    result.find('#severity').simulate('submit');
    expect(result.find("#allergic-reactions"))
});