import React from 'react';
import {Form} from 'antd';
import "../style/Form.scss";
class NormalForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.getFormData && this.props.getFormData(values);
            }
        });
    };

    unique = (obj) => {
        let index = store.indexOf(obj);
        if (index === -1) {
            store.push(obj);
            index = store.length - 1;
        }

        return 'unique-key-' + index;
    };

    renderChildren = (children, params) => {
        return children
            .filter(item => !!item)
            .map((item) => {
                return React.cloneElement(item, {key: item.props.name || item.props.title || this.unique(item) ||  Math.random(), ...params})
            });
    };

    render() {
        const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;
        const params = {};
        params.getFieldDecorator = getFieldDecorator;
        params.setFieldsValue = setFieldsValue;
        params.getFieldValue = getFieldValue;
        let children = this.props.children;
        if (!Array.isArray(children)) {
            children = [children];
        }
        return (
            <Form className={this.props.className || ""} onSubmit={this.handleSubmit} layout={this.props.layout || "vertical"}>
                {this.renderChildren(children, params)}
            </Form>
        );
    }
}

const WrappedNormalForm = Form.create({
    // onValuesChange: (props, values) => {
    //     if (!WrappedNormalForm.onValuesChange) {
    //         return;
    //     }
    //     WrappedNormalForm.onValuesChange(props, values);
    // }
})(NormalForm);
export default WrappedNormalForm;
