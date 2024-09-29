import { Modal, Spinner } from "react-bootstrap";
import { IForm } from "../../Core/Models/Form";

const SubmitModal = ({
  showModal,
  handleCloseModal,
  formData,
  loading,
}: {
  showModal: boolean;
  handleCloseModal: () => void;
  formData: IForm;
  loading: boolean;
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {loading ? "Processing..." : "Form Submitted"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SubmitModal;
