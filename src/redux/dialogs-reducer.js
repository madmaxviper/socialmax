const SEND_MESSAGE = "SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
