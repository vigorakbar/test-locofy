import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Wallet1 from "../components/Wallet1";
import styles from "./Wallet.module.css";

const Wallet: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOverviewMenuWrapperClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <div className={styles.wallet}>
      <div className={styles.wallet1}>
        <Header />
        <div className={styles.body}>
          <div className={styles.sideNav}>
            <div
              className={styles.overviewMenuWrapper}
              onClick={onOverviewMenuWrapperClick}
            >
              <div className={styles.overviewMenu}>
                <img className={styles.menuIcon} alt="" src="/menu-icon.svg" />
                <div className={styles.menuLabel}>Overview</div>
              </div>
            </div>
            <div
              className={styles.tradeMenuWrapper}
              onClick={onTradeMenuWrapperClick}
            >
              <div className={styles.overviewMenu}>
                <img
                  className={styles.menuIcon1}
                  alt=""
                  src="/menu-icon-1.svg"
                />
                <div className={styles.menuLabel}>Trade</div>
              </div>
              <div className={styles.counter}>
                <b className={styles.b}>19</b>
              </div>
            </div>
            <div
              className={styles.walletMenuWrapper}
              onClick={onWalletMenuWrapperClick}
            >
              <div className={styles.overviewMenu}>
                <img
                  className={styles.menuIcon2}
                  alt=""
                  src="/menu-icon-2.svg"
                />
                <div className={styles.menuLabel}>Wallet</div>
              </div>
            </div>
            <div
              className={styles.transactionMenuWrapper}
              onClick={onTransactionMenuWrapperClick}
            >
              <div className={styles.transactionMenu}>
                <img
                  className={styles.menuIcon3}
                  alt=""
                  src="/menu-icon-3.svg"
                />
                <div className={styles.menuLabel3}>Transactions</div>
              </div>
              <div className={styles.counter}>
                <b className={styles.b}>19</b>
              </div>
            </div>
            <div className={styles.statisticMenuWrapper}>
              <div className={styles.transactionMenu}>
                <img
                  className={styles.menuIcon4}
                  alt=""
                  src="/menu-icon-4.svg"
                />
                <div className={styles.menuLabel3}>Statistics</div>
              </div>
            </div>
            <div className={styles.statisticMenuWrapper}>
              <div className={styles.overviewMenu}>
                <img
                  className={styles.menuIcon5}
                  alt=""
                  src="/menu-icon-5.svg"
                />
                <div className={styles.menuLabel3}>Settings</div>
              </div>
            </div>
            <div className={styles.bottomMenu}>
              <div className={styles.referral}>Referral</div>
              <div className={styles.referral}>Logout</div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mainContent}>
              <div className={styles.mainContentNav}>
                <b className={styles.campaignsManagement}>
                  User Management Wallet
                </b>
                <div className={styles.triangleParent}>
                  <img
                    className={styles.triangleIcon}
                    alt=""
                    src="/triangle.svg"
                  />
                  <b className={styles.accounts}>Accounts</b>
                  <b className={styles.nikeS24}>RAMON RIDWAN</b>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/line-22.svg"
                  />
                </div>
              </div>
              <div className={styles.mainContentTitle}>
                <b className={styles.wallet2}>Wallet</b>
              </div>
              <Wallet1
                walletAlignSelf="unset"
                walletWidth="1024px"
                walletLogoContainer="/wallet-logo-container.svg"
                starsOrnament="/stars-ornament.svg"
                backgroundMask="/background-mask.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;