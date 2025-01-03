type ConfirmModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    message,
}) => {
    if (!isOpen) return null;

    return (
        <div 
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
        >
            <div
                
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                <p>{message}</p>
                <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button onClick={onConfirm} className="button primary">
                        OK
                    </button>
                    <button onClick={onClose} className="button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export {ConfirmModal}