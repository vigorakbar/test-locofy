import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TotalCard.module.css";

export type TotalCardType = {
  className?: string;
  path4?: string;
  path2Copy?: string;
  prop?: string;
  title?: string;
  statNumberContainerItem?: string;
  path2?: string;
  cardPopoverButton?: string;

  /** Style props */
  statsGap?: CSSProperties["gap"];
  numberPadding?: CSSProperties["padding"];
  numberWidth?: CSSProperties["width"];
  statNumberContainersPadding?: CSSProperties["padding"];
  statNumberContainerWidth?: CSSProperties["width"];
  statNumberInnerPadding?: CSSProperties["padding"];
};

const TotalCard: FunctionComponent<TotalCardType> = ({
  className = "",
  path4,
  path2Copy,
  prop,
  title,
  statsGap,
  numberPadding,
  numberWidth,
  statNumberContainersPadding,
  statNumberContainerItem,
  statNumberContainerWidth,
  statNumberInnerPadding,
  path2,
  cardPopoverButton,
}) => {
  const statsStyle: CSSProperties = useMemo(() => {
    return {
      gap: statsGap,
    };
  }, [statsGap]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      padding: numberPadding,
      width: numberWidth,
    };
  }, [numberPadding, numberWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: statNumberContainerWidth,
    };
  }, [statNumberContainerWidth]);

  return (
    <div className={[styles.totalCard, className].join(" ")}>
      <div className={styles.totalNumber}>
        <div className={styles.totalGraphic}>
          <b className={styles.b}>{prop}</b>
          <img className={styles.totalGraphicChild} alt="" src="/frame-7.svg" />
        </div>
      </div>
      <div className={styles.statsSection}>
        <b className={styles.title}>{title}</b>
        <div className={styles.stats} style={statsStyle}>
          <div className={styles.number} style={numberStyle}>
            <div className={styles.div} style={divStyle}>
              {statNumberContainerItem}
            </div>
            <img className={styles.path2Icon} alt="" src={path2} />
          </div>
          <img className={styles.graphIcon} alt="" src="/graph.svg" />
        </div>
      </div>
      <img className={styles.totalCardChild} alt="" src={cardPopoverButton} />
    </div>
  );
};

export default TotalCard;