import { FunctionComponent } from "react";
import styles from "./MainContentNav.module.css";

export type MainContentNavType = {
  className?: string;
  campaignsManagement?: string;
};

const MainContentNav: FunctionComponent<MainContentNavType> = ({
  className = "",
  campaignsManagement,
}) => {
  return (
    <div className={[styles.mainContentNav, className].join(" ")}>
      <b className={styles.campaignsManagement}>{campaignsManagement}</b>
      <div className={styles.triangleParent}>
        <img className={styles.triangleIcon} alt="" src="/triangle.svg" />
        <b className={styles.accounts}>Accounts</b>
        <b className={styles.nikeS24}>RAMON RIDWAN</b>
        <img className={styles.groupChild} alt="" src="/line-22.svg" />
      </div>
    </div>
  );
};

export default MainContentNav;