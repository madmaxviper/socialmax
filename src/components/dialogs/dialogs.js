import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogitem";
import Message from "./message/message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../common/forms-controls/forms-controls';
import { required, maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogData.map((dialog) => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
  });
  let messagesElements = state.messagesData.map((message) => {
    return <Message message={message.message} key={message.id} />;
  });

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50 ]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
