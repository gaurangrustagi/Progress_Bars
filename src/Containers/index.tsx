import { Typography } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import { IGetQueryResponse } from '../Interfaces';
import { getData } from '../Services';
import Layout from './Layout';
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
        this.setState({
            data: {... response.data}
        })
    }
    render() {
        return (
            <>
                <Layout data={this.state.data}/>
            </>
        )
    }
}

export default ProgressBars