import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Icon from "./Icon";

const ContactForm = () => {

	return (
		<div className="contact-form py-5 px-5">

			<Row className="">
				<Col sm="12" md="5" className="px-5">
					<h2 className="display-3">
						Contact us
					</h2>
					<Button className="btn-dark mt-3">
						Connect us <Icon>arrow-right</Icon>
					</Button>
				</Col>
				<Col sm="12" md="7" className="px-5">

					<Form>
						<Row>

							<Col md={6}>
								<FormGroup>

									<Input
										id="examplePassword"
										name="password"
										placeholder="Name"
										type="text"
									/>
								</FormGroup>
							</Col>

							<Col md={6}>
								<FormGroup>
									
									<Input
										id="exampleEmail"
										name="email"
										placeholder="Email"
										type="email"
									/>
								</FormGroup>
							</Col>

						</Row>
						<FormGroup>
							
							<Input
								type="textarea"

								id="exampleAddress"
								name="address"
								placeholder="Message "
							/>
						</FormGroup>

					</Form>

				</Col>
			</Row>
		</div>

	)
}

export default ContactForm;
