import React, {Component} from 'react';
import {Input} from 'antd';
// import {errorMessageTransform} from 'utils/validate';

class _Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        // const rules = errorMessageTransform(props.rules,'input',title);
        return (
            <Input maxLength={props.maxLength} readOnly={props.readOnly} disabled={props.disabled} autosize={props.autosize} type={props.dataType} placeholder={props.placeholder} autoFocus={props.autoFocus} autoComplete="off"/>
        );
    }
}

export default _Input;