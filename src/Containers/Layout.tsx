import { Component } from 'react';
import { Progress, Button, Typography, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IGetQueryResponse } from '../Interfaces';
import { getData } from '../Services';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
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
    componentDidMount() {
        if (this.props && this.props.data) {
            console.log("hi")
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
                    {this.state && this.state.bars && this.state.bars.map((elem, i) => {
                        <Row id={'Row' + i.toString()}>
                            <Col>
                                hi
                            </Col>
                            <Col>
                                <Radio></Radio>
                            </Col>
                        </Row>
                    })}
                </Container>
            </>
        )
    }
}

export default Layout

