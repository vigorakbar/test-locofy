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
  frameDivPadding?: CSSProperties["padding"];
  frameDivPadding1?: CSSProperties["padding"];
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
  frameDivPadding,
  frameDivPadding1,
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

  const statNumberContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: statNumberContainerWidth,
    };
  }, [statNumberContainerWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  return (
    <div className={[styles.totalCard, className].join(" ")}>
      <div className={styles.totalNumber}>
        <div className={styles.totalGraphic}>
          <b className={styles.b}>{prop}</b>
          <img
            className={styles.totalGraphicChild}
            loading="lazy"
            alt=""
            src="/frame-7.svg"
          />
        </div>
      </div>
      <div className={styles.statsSection}>
        <b className={styles.title}>{title}</b>
        <div className={styles.stats} style={statsStyle}>
          <div className={styles.numberWrapper}>
            <div className={styles.number} style={numberStyle}>
              <div
                className={styles.statNumberContainerItemParent}
                style={frameDivStyle}
              >
                <div
                  className={styles.statNumberContainer}
                  style={statNumberContainerStyle}
                >
                  {statNumberContainerItem}
                </div>
                <div className={styles.path2Wrapper} style={frameDiv1Style}>
                  <img className={styles.path2Icon} alt="" src={path2} />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.graphIcon}
            loading="lazy"
            alt=""
            src="/graph.svg"
          />
        </div>
      </div>
      <img
        className={styles.cardPopoverButton}
        loading="lazy"
        alt=""
        src={cardPopoverButton}
      />
    </div>
  );
};

export default TotalCard;
