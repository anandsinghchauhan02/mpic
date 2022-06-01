import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = () => {

	return (
		<div className="contact-form bg-warning py-5 px-5">

			<Row className="">
				<Col sm="12" md="5" className="px-5">
					<h2 className="display-3">
						Contact us
					</h2>
					<Button className="btn-dark mt-5">
						Connect
					</Button>
				</Col>
				<Col sm="12" md="7" className="px-5">

					<Form>
						<Row>

							<Col md={6}>
								<FormGroup>
									<Label for="examplePassword">
										Name
									</Label>
									<Input
										id="examplePassword"
										name="password"
										placeholder="password placeholder"
										type="text"
									/>
								</FormGroup>
							</Col>

							<Col md={6}>
								<FormGroup>
									<Label for="exampleEmail">
										Email
									</Label>
									<Input
										id="exampleEmail"
										name="email"
										placeholder="with a placeholder"
										type="email"
									/>
								</FormGroup>
							</Col>

						</Row>
						<FormGroup>
							<Label for="exampleAddress">
								Message
							</Label>
							<Input
								type="textarea"

								id="exampleAddress"
								name="address"
								placeholder="Hi, "
							/>
						</FormGroup>

					</Form>

				</Col>
			</Row>
		</div>

	)
}

export default ContactForm;
