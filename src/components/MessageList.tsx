import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MessageList.module.css";

export type MessageListType = {
  className?: string;
  name1?: string;

  /** Style props */
  messageListWidth?: CSSProperties["width"];
  messageListPadding?: CSSProperties["padding"];
  nameWidth?: CSSProperties["width"];
};

const MessageList: FunctionComponent<MessageListType> = ({
  className = "",
  messageListWidth,
  messageListPadding,
  name1,
  nameWidth,
}) => {
  const messageListStyle: CSSProperties = useMemo(() => {
    return {
      width: messageListWidth,
      padding: messageListPadding,
    };
  }, [messageListWidth, messageListPadding]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      width: nameWidth,
    };
  }, [nameWidth]);

  return (
    <div
      className={[styles.messageList, className].join(" ")}
      style={messageListStyle}
    >
      <div className={styles.messageleft}>
        <div className={styles.name} style={nameStyle}>
          {name1}
        </div>
        <div className={styles.userMessageContent}>
          <input className={styles.bg} type="text" />
          <div className={styles.text}>
            Hello am new to this system can i get a breakdown on how it works?
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
