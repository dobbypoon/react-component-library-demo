import BootstrapModal from "./BootstrapModal";
import IonicModal from "./IonicModal";
import MaterialUiModal from "./MaterialUiModal";

function Modal() {
    const comparisonItems = ['Lower-level', 'Dialog'];
    const header = (
        <div className="header">
            { comparisonItems.map((item, i) => (
                <div key={`modal_comparisonItem_${i}`} className="comparison-row">{item}</div>
            ))}
        </div>
    );

    return (
        <div className="component-library-modal">
            <h2>Modal</h2>
            <div className="comparison-grid">
                {header}
                <BootstrapModal />
                <MaterialUiModal />
                <IonicModal />
            </div>
        </div>
    );
}

export default Modal;