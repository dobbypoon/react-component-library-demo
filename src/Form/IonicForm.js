import { IonInput, IonLabel, IonItem, IonCheckbox } from "@ionic/react";

function IonicForm() {

    const handleSubmit = () => {

    };

    return (
        <div className="comparison-item-container">
            <div>IonicForm</div>
            <form noValidate onSubmit={handleSubmit}>
                <div className="comparison-row">
                    <IonItem>
                        <IonLabel position="floating">Email address</IonLabel>
                        <IonInput type="email"></IonInput>
                    </IonItem>
                </div>

                <div className="comparison-row">
                    <IonItem>
                        <IonLabel>Check me out</IonLabel>
                        <IonCheckbox></IonCheckbox>
                    </IonItem>
                </div>

            </form>
        </div>
    );
}

export default IonicForm;