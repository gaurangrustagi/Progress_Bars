import { Component } from 'react';
import { Progress, Typography, Select } from 'antd';
import { IGetQueryResponse } from '../Interfaces';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, ButtonGroup } from 'reactstrap';

const { Title } = Typography
const { Option } = Select;

interface IProps {
    data: IGetQueryResponse | null
}
interface IState extends IGetQueryResponse {
    activeUnit: number
}

class Layout extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            bars: undefined,
            buttons: undefined,
            limit: 0,
            activeUnit: 0,
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
    handleOptionChange = (event: number) => {
        this.setState({
            activeUnit: event
        })
    }
    onButtonPress = (amount:number) => {
        const {bars,activeUnit} = this.state
        const newBars = bars && bars.map((elem,i) => {
            if(i == activeUnit){
                return elem + amount
            }
            return elem
        })
        this.setState({
            bars: newBars
        })

    }
    render() {
        const { bars, buttons, limit,activeUnit } = this.state
        console.log(this.state)
        return (
            <>
                <Title style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', display: 'flex' }}>Progress Bars</Title>
                <Container>
                    {this.state && bars && limit &&
                        bars.map((elem, i) => (
                            <Row key={i} >
                                <Col style={{ margin: '70px' }} >
                                    <Progress status={elem > limit ? 'exception' : i==activeUnit? 'active' : 'normal'} percent={elem} />
                                </Col>
                                <Col>
                                    <Progress type="circle" percent={elem} status={elem > limit ? 'exception' : i==activeUnit? 'active' : 'normal'} />
                                </Col>
                            </Row>
                        ))}
                    <Row>
                        <Col>
                            <Select defaultValue={0} style={{ width: 120 }} onChange={this.handleOptionChange}>
                                {this.state && bars &&
                                    bars.map((elem, i) => (
                                        <Option key={i} value={i}>
                                            {"Progress " + i.toString()}
                                        </Option>
                                    ))}
                            </Select>
                        </Col>
                        <Col>
                            <ButtonGroup>
                                {this.state && buttons && buttons.map((elem, i) => {
                                    return (
                                        <Button key={i} onClick={e => this.onButtonPress(elem)}>{elem.toString()}</Button>
                                    )
                                })
                                }
                            </ButtonGroup>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}

export default Layout

