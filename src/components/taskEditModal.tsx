import { Modal, ModalContent, ModalHeader, ModalBody, Input, Textarea, ModalFooter, Button } from "@nextui-org/react";

function TaskEditModal({
  isOpen,
  onOpenChange,
  title,
  setTitle,
  description,
  setDescription,
  errors,
  handleAction,
  actionLabel,
  modalTitle,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  errors: { title?: string; description?: string };
  handleAction: () => void;
  actionLabel: string;
  modalTitle: string;
}) {
  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalBody>
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={!!errors.title}
            errorMessage={errors.title}
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isInvalid={!!errors.description}
            errorMessage={errors.description}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
            Close
          </Button>
          <Button color="primary" onPress={handleAction}>
            {actionLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TaskEditModal;