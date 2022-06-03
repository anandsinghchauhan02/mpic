import React from "react";
import { Row, Col, Container } from 'reactstrap';

const BlockTitle = ({ title = '', subTitle = '' }) => {

	return (
		<Container fluid>

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
		</Container>

	)
}

export default BlockTitle;
