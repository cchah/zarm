import React from 'react';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePickerView from '../index';
import enLocale from '../locale/en_US';


describe('DatePickerView', () => {
  it('DatePickerView time', () => {
    const wrapper = mount(
      <DatePickerView
        title="选择时间"
        placeholder="请选择时间"
        mode="datetime"
        defaultValue="2017-11-03 15:00"
        />
    );
    wrapper.setProps({ defaultValue: '2017-09-06 12:00' });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
