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
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      width: nameWidth,
      color: nameColor,
    };
  }, [nameWidth, nameColor]);

  return (
    <div className={[styles.bgParent, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.text}>
        Yes we currently run both on our platform here
      </div>
      <div className={styles.name} style={nameStyle}>
        {name1}
      </div>
    </div>
  );
};

export default GroupComponent;