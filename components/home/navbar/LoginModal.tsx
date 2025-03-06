import { Login } from "@/components/auth/Login";
import { Modal } from "@/components/general/Modal";
import React, { FC } from "react";

export type Props = {
  showModal: boolean;
  setShowModal: () => void;
};

export const LoginModal: FC<Props> = (props) => {
  return (
    <Modal
      title="Register / Sign In"
      isOpen={props.showModal}
      onClose={props.setShowModal}
    >
      <Login isVisible={true} />
    </Modal>
  );
};
