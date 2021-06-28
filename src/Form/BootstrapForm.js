import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function BootstrapForm() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div className="comparison-item-container">
			<div>BootstrapForm</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group controlId="bootstrapFormEmail" className="comparison-row">
					<Form.Label>Email address</Form.Label>
					<Form.Control required type="email" placeholder="Enter email" defaultValue="example@email.com" />
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="bootstrapFormCheckbox" className="comparison-row">
					<Form.Check
						required
						type="checkbox"
						label="Check me out"
						feedback="You must agree before submitting."
					/>
				</Form.Group>

				<Form.Group controlId="bootstrapFormSelect" className="comparison-row">
					<Form.Label>Example select</Form.Label>
					<Form.Control as="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="bootstrapFormRange" className="comparison-row">
					<Form.Label>Range</Form.Label>
					<Form.Control type="range" />
				</Form.Group>

				<div className="comparison-row">/</div>

				<div className="comparison-row">
					<InputGroup>
						<Form.Control
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>

						<DropdownButton
							as={InputGroup.Append}
							variant="outline-secondary"
							title="Dropdown"
							id="input-group-dropdown-2">
							<Dropdown.Item href="#">Action</Dropdown.Item>
							<Dropdown.Item href="#">Another action</Dropdown.Item>
							<Dropdown.Item href="#">Something else here</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href="#">Separated link</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</div>

				<div className="comparison-row">/</div>

				<Button type="submit" className="m-2">
					Submit bootstrap
				</Button>
			</Form>
		</div>
	);
}

export default BootstrapForm;
