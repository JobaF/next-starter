"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IconPlus } from "@tabler/icons-react";

export default function CreateClassModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function onSubmit() {
    // Create class server action
  }

  return (
    <>
      <Button onPress={onOpen} isIconOnly>
        <IconPlus />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Neue Klasse erstellen
              </ModalHeader>
              <ModalBody>
                <Input label="Name" isRequired />
                <Input label="Fach" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Abbrechen
                </Button>
                <Button color="primary" onPress={onSubmit}>
                  Erstellen
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
