import { withPrefix } from "gatsby";
import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Pros = ({ list = [] }) => {

	return (

		<Row>
			{
				list.map(({ title, description, image }, index) => {
					return (
						<Col className="py-2" key={index}>
							<Card className="border-0">
								<CardBody>
									<div className="pb-3">
										<img
											alt="Card image cap"
											src={withPrefix(image)}

											width="40px"
											height="40px"
										/>

									</div>
									<CardTitle tag="h5">
										{title}
									</CardTitle>
									<CardSubtitle
										className="mb-2 text-muted"
										tag="h6"
									>
										{description}
									</CardSubtitle>

								</CardBody>
							</Card>



						</Col>
					)
				})
			}
		</Row>

	)
}

export default Pros;
