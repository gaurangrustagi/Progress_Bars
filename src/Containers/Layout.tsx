import { Component } from 'react';
import { Progress, Button, Typography, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IGetQueryResponse } from '../Interfaces';
import { getData } from '../Services';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressUnit from './ProgressUnit';

const { Title } = Typography


interface IProps {
    data: IGetQueryResponse | null
}
interface IState extends IGetQueryResponse { }

class Layout extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            bars: undefined,
            buttons: undefined,
            limit: 0,
        }
    }
    componentDidUpdate(prevProps: IProps) {
        if (prevProps != this.props && this.props && this.props.data) {
            const { bars, buttons, limit } = this.props.data
            this.setState({
                bars,
                buttons,
                limit
            })
        }
    }

    render() {
        // const { bars, buttons, limit } = this.state
        console.log(this.state)
        return (
            <>
                <Title style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', display: 'flex' }}>Progress Bars</Title>
                <Container>
                    {this.props && this.props.data && this.props.data.bars &&
                        this.props.data.bars.map((elem, i) => (
                            <Row key={i} >
                                <Col style={{ margin: '70px' }} >
                                    <Progress percent={elem} />
                                </Col>
                                <Col>
                                    <Progress type="circle" percent={elem} />
                                </Col>
                            </Row>
                        ))}
                </Container>
            </>
        )
    }
}

export default Layout

