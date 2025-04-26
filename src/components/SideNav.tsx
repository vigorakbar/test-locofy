import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideNav.module.css";

export type SideNavType = {
  className?: string;
  menuIcon?: string;
  menuIcon1?: string;
  menuIcon2?: string;
  menuIcon3?: string;
  menuIcon4?: string;
  menuIcon5?: string;

  /** Style props */
  sideNavAlignSelf?: CSSProperties["alignSelf"];
  sideNavHeight?: CSSProperties["height"];
  overviewMenuWrapperBackground?: CSSProperties["background"];
  dividerSpacerDisplay?: CSSProperties["display"];
  dividerSpacerAlignItems?: CSSProperties["alignItems"];
  dividerSpacerJustifyContent?: CSSProperties["justifyContent"];
  walletMenuWrapperBackground?: CSSProperties["background"];
  transactionMenuWrapperBackground?: CSSProperties["background"];
  counterBackground?: CSSProperties["background"];
  counterBackgroundColor?: CSSProperties["backgroundColor"];
  bColor?: CSSProperties["color"];
  bBackground?: CSSProperties["background"];
  bWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  bWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
};

const SideNav: FunctionComponent<SideNavType> = ({
  className = "",
  sideNavAlignSelf,
  sideNavHeight,
  overviewMenuWrapperBackground,
  menuIcon,
  menuIcon1,
  dividerSpacerDisplay,
  dividerSpacerAlignItems,
  dividerSpacerJustifyContent,
  walletMenuWrapperBackground,
  menuIcon2,
  transactionMenuWrapperBackground,
  menuIcon3,
  counterBackground,
  counterBackgroundColor,
  bColor,
  bBackground,
  bWebkitBackgroundClip,
  bWebkitTextFillColor,
  menuIcon4,
  menuIcon5,
}) => {
  const sideNavStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: sideNavAlignSelf,
      height: sideNavHeight,
    };
  }, [sideNavAlignSelf, sideNavHeight]);

  const overviewMenuWrapperStyle: CSSProperties = useMemo(() => {
    return {
      background: overviewMenuWrapperBackground,
    };
  }, [overviewMenuWrapperBackground]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: dividerSpacerDisplay,
      alignItems: dividerSpacerAlignItems,
      justifyContent: dividerSpacerJustifyContent,
    };
  }, [
    dividerSpacerDisplay,
    dividerSpacerAlignItems,
    dividerSpacerJustifyContent,
  ]);

  const walletMenuWrapperStyle: CSSProperties = useMemo(() => {
    return {
      background: walletMenuWrapperBackground,
    };
  }, [walletMenuWrapperBackground]);

  const transactionMenuWrapperStyle: CSSProperties = useMemo(() => {
    return {
      background: transactionMenuWrapperBackground,
    };
  }, [transactionMenuWrapperBackground]);

  const counterStyle: CSSProperties = useMemo(() => {
    return {
      background: counterBackground,
      backgroundColor: counterBackgroundColor,
    };
  }, [counterBackground, counterBackgroundColor]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      color: bColor,
      background: bBackground,
      webkitBackgroundClip: bWebkitBackgroundClip,
      webkitTextFillColor: bWebkitTextFillColor,
    };
  }, [bColor, bBackground, bWebkitBackgroundClip, bWebkitTextFillColor]);

  const navigate = useNavigate();

  const onOverviewMenuWrapperClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='overviewMenuWrapper']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTradeMenuWrapperClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletMenuWrapperClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onTransactionMenuWrapperClick = useCallback(() => {
    navigate("/transaction");
  }, [navigate]);

  return (
    <div className={[styles.sideNav, className].join(" ")} style={sideNavStyle}>
      <div
        className={styles.overviewMenuWrapper}
        data-scroll-to="overviewMenuWrapper"
        onClick={onOverviewMenuWrapperClick}
        style={overviewMenuWrapperStyle}
      >
        <div className={styles.overviewMenu}>
          <img className={styles.menuIcon} alt="" src={menuIcon} />
          <div className={styles.menuLabel}>Overview</div>
        </div>
      </div>
      <div
        className={styles.tradeMenuWrapper}
        onClick={onTradeMenuWrapperClick}
      >
        <div className={styles.overviewMenu}>
          <img className={styles.menuIcon1} alt="" src={menuIcon1} />
          <div className={styles.menuLabel}>Trade</div>
        </div>
        <div className={styles.counter}>
          <b className={styles.b} style={bStyle}>
            19
          </b>
        </div>
      </div>
      <div
        className={styles.walletMenuWrapper}
        onClick={onWalletMenuWrapperClick}
        style={walletMenuWrapperStyle}
      >
        <div className={styles.overviewMenu}>
          <img className={styles.menuIcon2} alt="" src={menuIcon2} />
          <div className={styles.menuLabel}>Wallet</div>
        </div>
      </div>
      <div
        className={styles.transactionMenuWrapper}
        onClick={onTransactionMenuWrapperClick}
        style={transactionMenuWrapperStyle}
      >
        <div className={styles.transactionMenu}>
          <img className={styles.menuIcon3} alt="" src={menuIcon3} />
          <div className={styles.menuLabel3}>Transactions</div>
        </div>
        <div className={styles.counter} style={counterStyle}>
          <b className={styles.b} style={b1Style}>
            19
          </b>
        </div>
      </div>
      <div className={styles.statisticMenuWrapper}>
        <div className={styles.transactionMenu}>
          <img className={styles.menuIcon4} alt="" src={menuIcon4} />
          <div className={styles.menuLabel3}>Statistics</div>
        </div>
      </div>
      <div className={styles.statisticMenuWrapper}>
        <div className={styles.overviewMenu}>
          <img className={styles.menuIcon5} alt="" src={menuIcon5} />
          <div className={styles.menuLabel3}>Settings</div>
        </div>
      </div>
      <div className={styles.bottomMenu}>
        <div className={styles.referral}>Referral</div>
        <div className={styles.referral}>Logout</div>
      </div>
    </div>
  );
};

export default SideNav;