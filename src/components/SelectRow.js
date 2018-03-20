import React, {Component} from 'react';
import {Form, Select} from 'antd';
import {errorMessageTransform} from '../utils/validate';
import FormRow from './FormRow';

const FormItem = Form.Item;
const Option = Select.Option;

class SelectRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const title = props.title;
        const rules = errorMessageTransform(props.rules, 'select', title);
        return (
            <FormRow title={title} style={this.props.style} rules={rules} tip={props.tip}>
                <FormItem hasFeedback={props.hasFeedback === undefined ? true :  props.hasFeedback} className="select-item-container">
                    {props.getFieldDecorator(props.name, {
                        rules: rules,
                        initialValue: props.initialValue,
                    })(
                        <Select
                            allowClear={props.allowClear}
                            showSearch
                            placeholder={props.placeholder}
                            disabled={props.disabled}
                            onChange={props.onChange}
                        >
                            {props.options.map((option) => <Option key={option.value} value={option.value}>{option.label}</Option>)}
                        </Select>
                    )}
                </FormItem>
                {props.children}
            </FormRow>
        );
    }
}

export default SelectRow;