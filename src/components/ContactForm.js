import React, { useState, useCallback, useRef, useEffect } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Icon from "./Icon";

const ContactForm = () => {

	const [greet, setGreet] = useState('');

	const formEl = useRef(null);

	useEffect(() => {
		formEl.current.onsubmit = () => {
			setTimeout(() => {
				setGreet('Thank you ! we will get in touch soon.')
			}, 1000);
		}
	}, []);


	if (greet.length) {
		return (
			<div className="contact-form py-md-5 px-5 py-3">

				<Row className="justify-content-center">
					<Col xs="12" md="8">
						<h4 className="text-center">
							{greet}
						</h4>
					</Col>
				</Row>
				<iframe
					height={0}
					src="#"
					id="no-target"
					name="no-target"
					style={{ visibility: 'hidden' }}
				></iframe>
			</div>
		)
	}

	return (
		<div className="contact-form py-md-5 px-5 py-3">
			<form
				action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMLz1cr1ZKXUHT9-r2viw8_bWeXDitlwVRXvZsranRJKw6Fg/formResponse"
				method="POST"
				target="no-target"
				ref={formEl}
			>
				<Row className="">
					<Col sm="12" md="5" className="px-md-5 py-3">
						<h2 className="display-3">
							Contact us
						</h2>
						<Button type="submit" className="btn-dark mt-3">
							Connect us <Icon>arrow-right</Icon>
						</Button>
					</Col>
					<Col sm="12" md="7" className="px-md-5 py-3">


						<Row>

							<Col md={6}>
								<FormGroup>

									<Input
										id="examplePassword"
										name="entry.833710133"
										placeholder="Name"
										type="text"
										autoComplete="off"
										required
									/>
								</FormGroup>
							</Col>

							<Col md={6}>
								<FormGroup>

									<Input
										id="exampleEmail"
										name="entry.1676385723"
										placeholder="Phone no."
										type="text"
										autoComplete="off"
										required
									/>
								</FormGroup>
							</Col>

						</Row>
						<FormGroup>

							<Input
								type="textarea"

								id="exampleAddress"
								name="entry.297423139"
								placeholder="Message "
								required
							/>
						</FormGroup>

					</Col>
				</Row>
			</form>

			<iframe
				height={0}
				src="#"
				id="no-target"
				name="no-target"
				style={{ visibility: 'hidden' }}
			></iframe>
		</div>

	)
}

export default ContactForm;
