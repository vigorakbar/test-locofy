import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TableRow1.module.css";

export type TableRow1Type = {
  className?: string;
  tableCol3?: string;
  bitcoin?: string;
  buttonLabel?: string;
  tableCol8?: string;

  /** Style props */
  tableRow1Overflow?: CSSProperties["overflow"];
  tableCol1Overflow?: CSSProperties["overflow"];
  tableButtonBackgroundColor?: CSSProperties["backgroundColor"];
  tableButtonBackground?: CSSProperties["background"];
};

const TableRow1: FunctionComponent<TableRow1Type> = ({
  className = "",
  tableRow1Overflow,
  tableCol1Overflow,
  tableCol3,
  bitcoin,
  tableButtonBackgroundColor,
  tableButtonBackground,
  buttonLabel,
  tableCol8,
}) => {
  const tableRow1Style: CSSProperties = useMemo(() => {
    return {
      overflow: tableRow1Overflow,
    };
  }, [tableRow1Overflow]);

  const tableCol1Style: CSSProperties = useMemo(() => {
    return {
      overflow: tableCol1Overflow,
    };
  }, [tableCol1Overflow]);

  const tableButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: tableButtonBackgroundColor,
      background: tableButtonBackground,
    };
  }, [tableButtonBackgroundColor, tableButtonBackground]);

  return (
    <div
      className={[styles.tableRow1, className].join(" ")}
      style={tableRow1Style}
    >
      <div className={styles.tableCol1} style={tableCol1Style}>
        <div className={styles.div}>14/01/2019</div>
      </div>
      <div className={styles.tableCol2}>
        <div className={styles.div1}>12345678</div>
      </div>
      <img className={styles.tableCol3} alt="" src={tableCol3} />
      <div className={styles.tableCol4}>
        <div className={styles.bitcoin}>{bitcoin}</div>
      </div>
      <div className={styles.tableCol5}>
        <div className={styles.bitcoin}>$100</div>
      </div>
      <div className={styles.tableCol4}>
        <div className={styles.bitcoin}>#18000</div>
      </div>
      <div className={styles.tableCol7}>
        <div className={styles.tableButton} style={tableButtonStyle}>
          <b className={styles.buttonLabel}>{buttonLabel}</b>
        </div>
      </div>
      <img className={styles.tableCol8} alt="" src={tableCol8} />
    </div>
  );
};

export default TableRow1;