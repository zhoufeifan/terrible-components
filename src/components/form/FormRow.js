import React from 'react';
import {Row, Col, Popover, Icon} from 'antd';
import './FormRow.scss';

class FormRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const required = this.props.rules && this.props.rules.some(rule => rule.required);
        return (
            <Row className="form-row" style={this.props.style}>
                <Col className="form-row-label-col">
                    {this.props.title &&
                    <label
                        className={'form-row-label ' + (required ? 'form-row-label-required' : '')}
                    >
                        {this.props.title}
                        {this.props.tip &&
                        <Popover content={this.props.tip}>
                            <Icon type="question-circle-o" className="tip-icon"/>
                        </Popover>
                        }
                    </label>
                    }
                </Col>
                <Col className="form-row-content-col">
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}

export default FormRow;