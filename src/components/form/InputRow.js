import React, {Component} from 'react';
import {Form, Input, Row, Col} from 'antd';
import {errorMessageTransform} from '../../utils/validate';
import FormRow from '../form/FormRow';

const FormItem = Form.Item;

class _Input extends Component {
    constructor(props) {
        super(props);
    }

    onKeyUp = e => {
        if (this.props.onKeyUp) {
            return this.props.onKeyUp(e);
        }

        if (this.props.onEnter && e.keyCode === 13) {
            return this.props.onEnter(e);
        }
    };

    render() {
        const props = this.props;
        const title = props.title;
        const rules = errorMessageTransform(props.rules, 'input', title);
        return (
            <FormRow title={title} style={this.props.style} rules={rules} tip={props.tip}>
                <FormItem
                    hasFeedback={props.dataType !== 'hidden' && (props.hasFeedback === undefined ? true: props.hasFeedback)}
                    className="input-item-container"
                >
                    {props.getFieldDecorator(props.name, {
                        rules: rules,
                        initialValue: props.initialValue,
                    })(
                        <Input
                            maxLength={props.maxLength}
                            readOnly={props.readOnly}
                            disabled={props.disabled}
                            type={props.dataType}
                            placeholder={props.placeholder || '请输入' + title}
                            onChange={props.onChange}
                            onKeyUp={this.onKeyUp}
                        />
                    )}
                </FormItem>
                {props.children}
            </FormRow>
        );
    }
}

export default _Input;