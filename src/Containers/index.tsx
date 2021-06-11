import { Component } from 'react';
import { Progress, Button, Typography, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import "bootstrap/dist/css/bootstrap.min.css";
import  Layout  from './Layout';
import { IGetQueryResponse } from '../Interfaces';
import { getData } from '../Services';
import { Container, Row, Col } from 'react-bootstrap';
const { Title } = Typography

interface IState{
    data: IGetQueryResponse | null
}

class ProgressBars extends Component<{}, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
           data: null
        }
    }
    async componentDidMount() {
        await this.getInitialValues()
    }
    getInitialValues = async () => {
        const response = await getData()
        console.log(response)
        this.setState({
            data: {... response.data}
        })
    }
    render() {
        // const { bars, buttons, limit } = this.state
        console.log(this.state)
        return (
            <>
                <Layout data={this.state.data}/>
            </>
        )
    }
}

export default ProgressBars