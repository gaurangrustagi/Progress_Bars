import { Component } from 'react';
import { Progress, Button, Typography, Radio } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IGetQueryResponse } from '../../Interfaces';
import { getData } from '../../Services';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


interface IProps {
    percent: number | undefined
}


class ProgressUnit extends Component<IProps> {

    render() {
        const { percent } = this.props
        return (
            <>
                <Progress type="circle" percent={percent} />
                <br />
                {/* <Progress percent={percent} /> */}

            </>
        )
    }
}

export default ProgressUnit