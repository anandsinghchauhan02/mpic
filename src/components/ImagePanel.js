import React from "react";
import {
    Row, Col,

} from "reactstrap";



const ImagePanel = ({ image, children, imageStyle = {}, imageLeft = false, ...rest}) => {
    


    return (

        <Row {...rest}>


            {
                !imageLeft && (
                    <Col className="py-md-4 px-0">
                        {children}
                    </Col>

                )
            }
            <Col>
                <img src={image} alt="title" width={'100%'} height={'auto'} style={imageStyle} />
            </Col>
            {
                imageLeft && (
                    <Col className="py-md-4 px-0">
                        {children}
                    </Col>

                )
            }


        </Row>

    )
}

export default ImagePanel;
