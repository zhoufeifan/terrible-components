import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'components/form/Form';
// import Table from 'components/Table';
// import registerServiceWorker from './registerServiceWorker';

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }


    getFormData = () => {

    };

    render() {
        return (
            <Form ref="form" getFormData={(data) => {
                this.props.getQueryData && this.props.getQueryData(this.getFormData(data))
            }}>
                {/*<FormRow>*/}
                {/*</FormRow>*/}
            </Form>
        )
    }
}

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const tradeListColumns = [{
            title: "名称",
            dataIndex: "name",
            className: 'first-column',
            fixed: 'left',
            width: 120,
        }];
        return (
            <div className="table-page">
                <QueryForm/>
                {/*<Table*/}
                    {/*bordered={true}*/}
                    {/*className="trade-list-table"*/}
                    {/*recordKey="id"*/}
                    {/*listKey="tradeList"*/}
                    {/*columns={tradeListColumns}*/}
                    {/*scroll={{x: 2000}}*/}
                    {/*rawDataSource={this.state.tableData}*/}
                    {/*getDataList={({page})=>{*/}
                        {/*this.getTradeList(page);*/}
                    {/*}}*/}
                    {/*pagination={{*/}
                        {/*pageSize: 5,*/}
                        {/*showQuickJumper: true*/}
                    {/*}}>*/}
                {/*</Table>*/}
            </div>
        );
    }
}

ReactDOM.render(<FormPage/>, document.getElementById('root'));
// registerServiceWorker();
