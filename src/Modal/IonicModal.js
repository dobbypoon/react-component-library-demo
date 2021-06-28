import { IonButton, IonModal, IonContent } from "@ionic/react";
import { useState } from "react";

function IonicModal() {
    const mode = "md"; // ios or md
    const [showModal, setShowModal] = useState(false);

    return (
        <IonContent className="comparison-item-container">
            <div>Ionic</div>

            <div className="comparison-row">/</div>

            <div className="comparison-row">
                <IonModal mode={mode} isOpen={showModal}>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton onClick={() => setShowModal(true)}>
                    Show Modal
                </IonButton>
            </div>
        </IonContent>
    );
}

export default IonicModal;