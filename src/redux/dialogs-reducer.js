const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Vova" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Olga" },
  ],

  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are your lessons" },
    { id: 3, message: "Ok" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Dream" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
