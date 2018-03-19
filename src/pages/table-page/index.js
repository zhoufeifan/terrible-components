import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'components/form/Form';
import InputRow from 'components/form/InputRow';
import SelectRow from 'components/form/SelectRow';
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
            <Form className="table-form" ref="form" getFormData={(data) => {
                this.props.getQueryData && this.props.getQueryData(this.getFormData(data))
            }}>
                <InputRow
                    title="姓名"
                    name="name"
                />
                <SelectRow
                    title="年龄"
                    name="age"
                    options={[{label:'nima',value:'nima'},{label:'niba',value:'niba'}]}
                />
            </Form>
        )
    }
}

class TablePage extends React.Component {
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

ReactDOM.render(<TablePage/>, document.getElementById('root'));
// registerServiceWorker();
