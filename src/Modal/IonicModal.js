import { IonButton, IonModal } from "@ionic/react";
import { useState } from "react";

import "./IonicModal.scss";

function MyDialog(props) {
	return (
		<IonModal {...props}>
			<h4>Centered Modal</h4>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
				quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
			</p>
			<IonButton onClick={() => props.setShowModal(false)}>Close Modal</IonButton>
		</IonModal>
	);
}

function IonicModal() {
	const mode = "ios"; // ios or md
	const [showOrdinaryModal, setShowOrdinaryModal] = useState(false);
	const [showCustomizedModal, setShowCustomizedModal] = useState(false);

	return (
		<div className="comparison-item-container">
			<div>Ionic</div>

			<div className="comparison-row">/</div>

			<div className="comparison-row">
				<MyDialog mode={mode} isOpen={showOrdinaryModal} setShowModal={setShowOrdinaryModal} />
				<IonButton onClick={() => setShowOrdinaryModal(true)}>Show Modal</IonButton>
			</div>

			<div className="comparison-row">
				<MyDialog
					mode={mode}
					isOpen={showCustomizedModal}
					setShowModal={setShowCustomizedModal}
					cssClass="ionic-custom-class"
				/>
				<IonButton onClick={() => setShowCustomizedModal(true)}>Show Modal</IonButton>
			</div>
		</div>
	);
}

export default IonicModal;
