import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  barLabel?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  barComponentsPadding?: CSSProperties["padding"];
  barHeight?: CSSProperties["height"];
  barLabelWidth?: CSSProperties["width"];
  frameDivPadding1?: CSSProperties["padding"];
  barHeight1?: CSSProperties["height"];
  barContainerWidth?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivPadding,
  barComponentsPadding,
  barHeight,
  barLabel,
  barLabelWidth,
  frameDivPadding1,
  barHeight1,
  barContainerWidth,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const barStyle: CSSProperties = useMemo(() => {
    return {
      height: barHeight,
      height: barHeight1,
    };
  }, [barHeight, barHeight1]);

  const barContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: barLabelWidth,
      width: barContainerWidth,
    };
  }, [barLabelWidth, barContainerWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const barStyle1: CSSProperties = useMemo(() => {
    return {
      height: barHeight1,
    };
  }, [barHeight1]);

  const barContainerStyle1: CSSProperties = useMemo(() => {
    return {
      width: barContainerWidth,
    };
  }, [barContainerWidth]);

  return (
    <div
      className={[styles.barContainerWrapper, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.barContainer}>
        <div className={styles.barWrapper} style={frameDiv3Style}>
          <div className={styles.bar} style={barStyle} />
        </div>
        <div className={styles.barContainer1} style={barContainerStyle}>
          {barLabel}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
