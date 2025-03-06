import { produce } from "immer";
// import { Delivery, deliveryRequestInstance } from "../types"
export type State = {
  selected: any;
  rejectModalOpen: boolean;
  acceptModalOpen: boolean;
  updateHistoryModalOpen: boolean;
  addModalOpen: boolean;
  edit: boolean;
  modalOpen: boolean;
  requestModalOpen: boolean;
  serviceModalOpen: boolean;
  signinModal: boolean;
};

export type Action =
  | { type: "SET_SELECTED"; payload: any }
  | { type: "MODAL_OPEN"; payload: { edit: boolean } }
  | { type: "MODAL_CLOSE" }
  | { type: "REJECT_MODAL_OPEN" }
  | { type: "REJECT_MODAL_CLOSE" }
  | { type: "SIGNIN_MODAL_OPEN" }
  | { type: "SIGNIN_MODAL_CLOSE" }
  | { type: "ACCEPT_MODAL_OPEN" }
  | { type: "ACCEPT_MODAL_CLOSE" }
  | { type: "UPDATE_MODAL_OPEN" }
  | { type: "UPDATE_MODAL_CLOSE" }
  | { type: "ADD_MODAL_OPEN" }
  | { type: "ADD_MODAL_CLOSE" }
  | { type: "REQUEST_MODAL_OPEN" }
  | { type: "SERVICE_MODAL_OPEN" }
  | { type: "REQUEST_MODAL_CLOSE" }
  | { type: "SERVICE_MODAL_CLOSE" };
export const initState: State = {
  rejectModalOpen: false,
  acceptModalOpen: false,
  updateHistoryModalOpen: false,
  addModalOpen: false,
  edit: false,
  modalOpen: false,
  requestModalOpen: false,
  serviceModalOpen: false,
  selected: {},
  signinModal: false,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SELECTED":
      return produce(state, (draft) => {
        draft.selected = action.payload;
      });
    case "MODAL_OPEN":
      return produce(state, (draft) => {
        draft.edit = action.payload.edit;
        draft.modalOpen = true;
      });
    case "MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.modalOpen = false;
      });
    case "SIGNIN_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.signinModal = true;
      });
    case "SIGNIN_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.signinModal = false;
      });
    case "MODAL_OPEN":
      return produce(state, (draft) => {
        draft.edit = action.payload.edit;
        draft.modalOpen = true;
      });
    case "MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.modalOpen = false;
      });
    case "REJECT_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.rejectModalOpen = true;
      });
    case "REJECT_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.rejectModalOpen = false;
      });
    case "ACCEPT_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.acceptModalOpen = true;
      });
    case "ACCEPT_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.acceptModalOpen = false;
      });
    case "UPDATE_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.updateHistoryModalOpen = true;
      });
    case "UPDATE_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.updateHistoryModalOpen = false;
      });
    case "ADD_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.addModalOpen = true;
      });
    case "ADD_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.addModalOpen = false;
      });
    case "REQUEST_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.requestModalOpen = true;
      });
    case "REQUEST_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.requestModalOpen = false;
      });
    case "SERVICE_MODAL_OPEN":
      return produce(state, (draft) => {
        draft.serviceModalOpen = true;
      });
    case "SERVICE_MODAL_CLOSE":
      return produce(state, (draft) => {
        draft.serviceModalOpen = false;
      });
  }
}
