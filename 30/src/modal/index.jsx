import { useState } from "react";

function Modal() {
    const [showModal, setShowModal] = useState(false);
        const handleShowModel = () => setShowModal(true);
        const handleCloseModel = () => setShowModal(false);
        return(
           <>
    <button onClick={handleShowModel}>Click</button>
    {showModal && (
        <div className="modal">
            <div className="model-body">
                <button className="model-close" onClick={handleCloseModel}>x</button>
                <div className="model-content">Noi dung...</div>
            </div>
        </div>
    )}
            </>
        )
}
export default Modal;