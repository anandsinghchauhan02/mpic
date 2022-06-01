import React from "react";
import { Row, Col } from 'reactstrap';

const BlockTitle = ({ title='', subTitle='' }) => {

    return (

        <Row className="text-center justify-content-center">
            <Col md="5" sm="12">
                <h2 className="display-3">
                    {title}
                </h2>
                <p>
                    {subTitle}
                </p>
            </Col>
        </Row>

    )
}

export default BlockTitle;
