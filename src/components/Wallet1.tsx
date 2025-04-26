import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Wallet1.module.css";

export type Wallet1Type = {
  className?: string;
  walletLogoContainer?: string;
  starsOrnament?: string;
  backgroundMask?: string;

  /** Style props */
  walletAlignSelf?: CSSProperties["alignSelf"];
  walletWidth?: CSSProperties["width"];
};

const Wallet1: FunctionComponent<Wallet1Type> = ({
  className = "",
  walletAlignSelf,
  walletWidth,
  walletLogoContainer,
  starsOrnament,
  backgroundMask,
}) => {
  const walletStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: walletAlignSelf,
      width: walletWidth,
    };
  }, [walletAlignSelf, walletWidth]);

  return (
    <div className={[styles.wallet, className].join(" ")} style={walletStyle}>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <b className={styles.title}>Wallet</b>
          <button className={styles.buttonAction}>
            <div className={styles.buttonBackground} />
            <div className={styles.withdrawFunds}>Withdraw Funds</div>
          </button>
        </div>
        <div className={styles.sectionBody}>
          <img
            className={styles.walletLogoContainer}
            loading="lazy"
            alt=""
            src={walletLogoContainer}
          />
          <div className={styles.walletInfoContainer}>
            <div className={styles.walletInfoInner}>
              <div className={styles.walletInfo}>
                <div className={styles.infoTitle}>
                  <div className={styles.totalEarnings}>Total Earnings</div>
                </div>
                <div className={styles.infoContainer}>
                  <b className={styles.total}>#120000.00</b>
                  <div className={styles.description}>
                    <span>{`Please note this’s the total sum of ya’ transaction here on `}</span>
                    <b>GOGE AFRICA</b>
                  </div>
                </div>
              </div>
              <div className={styles.walletInfo}>
                <div className={styles.infoTitle1}>
                  <div className={styles.balance}>Balance</div>
                </div>
                <div className={styles.infoContainer1}>
                  <b className={styles.description1}>#30000.00</b>
                  <div className={styles.total1}>
                    Please note this the current balance amount left on ya’
                    wallet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.starsOrnamentIcon} alt="" src={starsOrnament} />
      <img className={styles.backgroundMaskIcon} alt="" src={backgroundMask} />
    </div>
  );
};

export default Wallet1;
