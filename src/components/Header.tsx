import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;

  /** Style props */
  headerAlignSelf?: CSSProperties["alignSelf"];
  headerWidth?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  headerAlignSelf,
  headerWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: headerAlignSelf,
      width: headerWidth,
    };
  }, [headerAlignSelf, headerWidth]);

  return (
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <div className={styles.headerLogo}>
        <img className={styles.path185Icon} alt="" src="/path18-5.svg" />
        <img
          className={styles.coinbaseIcon}
          loading="lazy"
          alt=""
          src="/coinbase.svg"
        />
        <img className={styles.bitcoin1Icon} alt="" src="/bitcoin-1.svg" />
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/searchicon.svg" />
          <input
            className={styles.placeholder}
            placeholder="Search e.g card"
            type="text"
          />
        </div>
        <div className={styles.user}>
          <div className={styles.profilePicture} />
          <div className={styles.userName}>Ramon Ridwan</div>
        </div>
        <div className={styles.notification}>
          <img className={styles.bellIcon} alt="" src="/bell-icon.svg" />
          <div className={styles.notificationCount}>
            <img className={styles.oval2Icon} alt="" src="/oval-2.svg" />
            <b className={styles.b}>24</b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
