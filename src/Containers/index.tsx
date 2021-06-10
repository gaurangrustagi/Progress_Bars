import { Component } from 'react';
import { Progress, Button, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IGetQueryResponse } from '../Interfaces';
import { getData } from '../Services';
const { Title } = Typography

interface IState extends IGetQueryResponse { }

class ProgressBars extends Component<IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            bars: [],
            buttons: [],
            limit: 0,
        }
    }
    componentDidMount() {
        this.getInitialValues()
    }
    getInitialValues = async () => {
        const response = await getData()
        const { bars, buttons, limit } = { ...response.data }
        this.setState({
            bars,
            buttons,
            limit
        })
    }
    render() {
        return (
            <>
                <Title level={2} style={{alignSelf: 'center'}}>Progress Bars</Title>
            </>
        )
    }
}

export default ProgressBars