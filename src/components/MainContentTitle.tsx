import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MainContentTitle.module.css";

export type MainContentTitleType = {
  className?: string;
  overview?: string;
  group?: string;
  showGroupIcon?: boolean;

  /** Style props */
  overviewWidth?: CSSProperties["width"];
  overviewDisplay?: CSSProperties["display"];
};

const MainContentTitle: FunctionComponent<MainContentTitleType> = ({
  className = "",
  overview,
  overviewWidth,
  overviewDisplay,
  group,
  showGroupIcon,
}) => {
  const overviewStyle: CSSProperties = useMemo(() => {
    return {
      width: overviewWidth,
      display: overviewDisplay,
    };
  }, [overviewWidth, overviewDisplay]);

  return (
    <div className={[styles.mainContentTitle, className].join(" ")}>
      <b className={styles.overview} style={overviewStyle}>
        {overview}
      </b>
      {!!showGroupIcon && (
        <img className={styles.groupIcon} alt="" src={group} />
      )}
    </div>
  );
};

export default MainContentTitle;
