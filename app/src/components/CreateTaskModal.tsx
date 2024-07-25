import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";

type Props = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
};

export default function CreateTaskModal({ openModal, setOpenModal }: Props) {
  const navigate = useNavigate();
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiBadgeCheck className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-green-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Task created successfully!
          </h3>
          <div className="flex justify-center gap-4">
            <Button gradientMonochrome="cyan" pill onClick={() => setOpenModal(false)}>
              Create another task
            </Button>
            <Button gradientMonochrome="teal" pill onClick={() => navigate("/tasks")}>
              Go to tasks
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
