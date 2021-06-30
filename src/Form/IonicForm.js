import {
	IonInput,
	IonLabel,
	IonItem,
	IonCheckbox,
	IonSelect,
	IonSelectOption,
	IonRange,
	IonDatetime,
	IonButton,
} from "@ionic/react";

function IonicForm() {

    const mode = "ios";

	const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };


	return (
		<div className="comparison-item-container">
			<div>Ionic</div>
			<form noValidate onSubmit={handleSubmit}>
				<div className="comparison-row">
					<IonItem>
						<IonLabel position="floating">Email address</IonLabel>
						<IonInput mode={mode} type="email"></IonInput>
					</IonItem>
				</div>

				<div className="comparison-row">
					<IonItem>
						<IonLabel>Check me out</IonLabel>
						<IonCheckbox mode={mode}></IonCheckbox>
					</IonItem>
				</div>

				<div className="comparison-row">
					<IonItem>
						<IonLabel>Example Select</IonLabel>
						<IonSelect mode={mode}>
							<IonSelectOption value={1}>1</IonSelectOption>
							<IonSelectOption value={2}>2</IonSelectOption>
							<IonSelectOption value={3}>3</IonSelectOption>
							<IonSelectOption value={4}>4</IonSelectOption>
							<IonSelectOption value={5}>5</IonSelectOption>
						</IonSelect>
					</IonItem>
				</div>

				<div className="comparison-row">
					<IonItem>
						<IonRange mode={mode} pin={true} />
					</IonItem>
				</div>

				<div className="comparison-row">
					<IonItem>
						<IonLabel>Birthday</IonLabel>
						<IonDatetime mode={mode} displayFormat="MM DD YY"></IonDatetime>
					</IonItem>
				</div>

				<div className="comparison-row">/</div>
				<div className="comparison-row">/</div>

				{/* type="submit" */}
                <IonButton mode={mode} className="m-2">Submit Ionic</IonButton>
			</form>
		</div>
	);
}

export default IonicForm;