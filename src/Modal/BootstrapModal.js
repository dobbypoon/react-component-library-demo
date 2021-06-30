import { useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Overlay from "react-bootstrap/Overlay";

import "./BootstrapModal.scss";

function MyLModal(props) {
	return (
		<Overlay {...props}>
			{({ placement, arrowProps, show: _show, popper, ...pros }) => (
				<div
					{...props}
					style={{
						backgroundColor: "rgba(255, 100, 100, 0.85)",
						padding: "2px 10px",
						color: "white",
						barderRadius: 3,
						...props.style,
					}}>
					Simple tooltip
				</div>
			)}
		</Overlay>
	);
}

function MyDialog(props) {
	return (
		<Modal {...props} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
					eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function BootstrapModal() {
	const modalTarget = useRef(null);
	const [lModalShow, setlModalShow] = useState(false);
	const [ordinaryDialogShow, setOrdinaryDialogShow] = useState(false);
	const [customizedDialogShow, setCustomizedDialogShow] = useState(false);

	return (
		<div className="comparison-item-container">
			<div>Bootstrap</div>

			<div className="comparison-row">
				<Button variant="danger" ref={modalTarget} onClick={() => setlModalShow(!lModalShow)}>
					Launch Overlay
				</Button>

				<MyLModal target={modalTarget.current} show={lModalShow} placement="right" />
			</div>

			<div className="comparison-row">
				<Button variant="primary" onClick={() => setOrdinaryDialogShow(true)}>
					Launch Modal
				</Button>

				<MyDialog show={ordinaryDialogShow} onHide={() => setOrdinaryDialogShow(false)} />
			</div>

			<div className="comparison-row">
				<Button variant="primary" onClick={() => setCustomizedDialogShow(true)}>
					Launch Modal
				</Button>

				<MyDialog
					dialogClassName="bootstrap-customize-dialog"
					show={customizedDialogShow}
					onHide={() => setCustomizedDialogShow(false)}
				/>
			</div>
		</div>
	);
}

export default BootstrapModal;
