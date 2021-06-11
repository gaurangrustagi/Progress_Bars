import { Component } from 'react';
import { Progress, Button, Typography, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IGetQueryResponse } from '../../Interfaces';
import { getData } from '../../Services';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


interface IProps {
    percent: Number | undefined
}

interface IState extends IGetQueryResponse { }


class ProgressBars extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            bars: undefined,
            buttons: undefined,
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
        const { bars, buttons, limit } = this.state
        return (
            <>
            </>
        )
    }
}

export default ProgressBars