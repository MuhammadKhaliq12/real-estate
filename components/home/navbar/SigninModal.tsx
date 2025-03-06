import { Signup } from "@/components/auth/Signup";
import { Modal } from "@/components/general/Modal";
import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const SigninModal: FC<Props> = (props) => {
  return (
    <Modal
      title="Register / Sign In"
      isOpen={props.showModal}
      onClose={() => props.setShowModal(false)}
    >
      <Signup isVisible={true} />
    </Modal>
  );
};
