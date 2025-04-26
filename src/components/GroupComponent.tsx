import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  name1?: string;

  /** Style props */
  nameWidth?: CSSProperties["width"];
  nameColor?: CSSProperties["color"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  name1,
  nameWidth,
  nameColor,
}) => {
  const name1Style: CSSProperties = useMemo(() => {
    return {
      width: nameWidth,
      color: nameColor,
    };
  }, [nameWidth, nameColor]);

  return (
    <div className={[styles.agentMessageNameParent, className].join(" ")}>
      <div className={styles.agentMessageName}>
        <div className={styles.name} style={name1Style}>
          {name1}
        </div>
      </div>
      <input
        className={styles.agentMessageContent}
        placeholder="Yes we currently run both on our platform here"
        type="text"
      />
    </div>
  );
};

export default GroupComponent;
