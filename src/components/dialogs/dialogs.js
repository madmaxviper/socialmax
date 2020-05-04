import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogitem";
import Message from "./message/message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogData.map((dialog) => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
  });
  let messagesElements = state.messagesData.map((message) => {
    return <Message message={message.message} key={message.id} />;
  });
  let newMessageBody = state.newMessageBody;


  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.NewMessageBody(body);
  }
  let onSendMessageClick = () => {
    props.sendMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="enter your message"></textarea>
        </div>
        <div>
          <button onClick={ onSendMessageClick }>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
