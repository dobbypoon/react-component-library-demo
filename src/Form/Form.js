import BootstrapForm from "./BootstrapForm";
import MaterialUiForm from "./MaterialUiForm";
import IonicForm from "./IonicForm";

function Form() {
    const comparisonItems = ['Input', 'Checkbox', 'Select', 'Range', 'Date picker', 'Input Group', 'Autocomplete', ];
    const header = (
        <div className="header">
            { comparisonItems.map((item, i) => (
                <div key={`form_comparisonItem_${i}`} className="comparison-row">{item}</div>
            ))}
        </div>
    );

    return (
        <div className="component-library-form">
            <h2>Form</h2>
            <div className="comparison-grid">
                {header}
                <BootstrapForm />
                <MaterialUiForm />
                <IonicForm />
            </div>
        </div>
    );
}

export default Form;