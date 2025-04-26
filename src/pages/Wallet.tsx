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
      <section className={styles.wallet1}>
        <Header headerAlignSelf="unset" headerWidth="1500px" />
        <div className={styles.body}>
          <div className={styles.sideNav}>
            <div
              className={styles.overviewMenuWrapper}
              onClick={onOverviewMenuWrapperClick}
            >
              <div className={styles.overviewMenu}>
                <img
                  className={styles.menuIcon}
                  loading="lazy"
                  alt=""
                  src="/menu-icon.svg"
                />
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
                  loading="lazy"
                  alt=""
                  src="/menu-icon-1.svg"
                />
                <div className={styles.menuLabel}>Trade</div>
              </div>
              <div className={styles.counter}>
                <b className={styles.counterValue}>19</b>
              </div>
            </div>
            <div
              className={styles.walletMenuWrapper}
              onClick={onWalletMenuWrapperClick}
            >
              <div className={styles.overviewMenu}>
                <img
                  className={styles.menuIcon2}
                  loading="lazy"
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
                  loading="lazy"
                  alt=""
                  src="/menu-icon-3.svg"
                />
                <div className={styles.menuLabel3}>Transactions</div>
              </div>
              <div className={styles.counter}>
                <b className={styles.counterValue}>19</b>
              </div>
            </div>
            <div className={styles.statisticMenuWrapper}>
              <div className={styles.transactionMenu}>
                <img
                  className={styles.menuIcon4}
                  loading="lazy"
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
                  loading="lazy"
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
                <div className={styles.frameParent}>
                  <div className={styles.accountsWrapper}>
                    <b className={styles.accounts}>Accounts</b>
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/line-22.svg"
                    />
                  </div>
                  <b className={styles.nikeS24}>RAMON RIDWAN</b>
                  <div className={styles.triangleWrapper}>
                    <img
                      className={styles.triangleIcon}
                      loading="lazy"
                      alt=""
                      src="/triangle.svg"
                    />
                  </div>
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
      </section>
    </div>
  );
};

export default Wallet;
