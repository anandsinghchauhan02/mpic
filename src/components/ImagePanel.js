import { withPrefix } from "gatsby";
import React from "react";
import {
    Row, Col,

} from "reactstrap";



const ImagePanel = ({ image, children, imageStyle = {}, imageLeft = false, ...rest }) => {



    return (

        <Row {...rest}>


            {
                !imageLeft && (
                    <Col xs="12" md="6" className="py-4 px-0">
                        {children}
                    </Col>

                )
            }
            <Col xs="12" md="6">
                <img src={withPrefix(image)} alt="title" width={'100%'} height={'auto'} style={imageStyle} />
            </Col>
            {
                imageLeft && (
                    <Col xs="12" md="6" className="py-4 px-0">
                        {children}
                    </Col>

                )
            }


        </Row>

    )
}

export default ImagePanel;
