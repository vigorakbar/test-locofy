import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import MainContentNav from "../components/MainContentNav";
import MainContentTitle from "../components/MainContentTitle";
import GroupComponent from "../components/GroupComponent";
import styles from "./Trade.module.css";

const Trade: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOverviewMenuWrapperClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTradeMenuWrapperClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tradeMenuWrapper']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onWalletMenuWrapperClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onTransactionMenuWrapperClick = useCallback(() => {
    navigate("/transaction");
  }, [navigate]);

  return (
    <div className={styles.trade}>
      <div className={styles.trade1}>
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
              data-scroll-to="tradeMenuWrapper"
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
              <div className={styles.counter1}>
                <b className={styles.b1}>19</b>
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
              <MainContentNav campaignsManagement="User Management   Trade" />
              <MainContentTitle
                overview="Trade"
                overviewWidth="unset"
                overviewDisplay="unset"
                group="/group1.svg"
                showGroupIcon={false}
              />
              <div className={styles.trade2}>
                <div className={styles.tradeWrapper}>
                  <div className={styles.sidebar}>
                    <div className={styles.currentUser}>
                      <div className={styles.currentUserWrapper}>
                        <div className={styles.userInfo}>
                          <img
                            className={styles.maskGroupIcon}
                            alt=""
                            src="/mask-group.svg"
                          />
                          <div className={styles.userInfo1}>
                            <b className={styles.ramonRidwan}>Ramon Ridwan</b>
                            <div className={styles.online}>Online</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.userList}>
                      <div className={styles.userListWrapper}>
                        <div className={styles.userInfoSection}>
                          <div className={styles.userInfo2}>
                            <img
                              className={styles.maskGroupIcon}
                              alt=""
                              src="/mask-group.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.ramonRidwan}>Agent Rue</b>
                              <div className={styles.online}>Online</div>
                            </div>
                          </div>
                          <div className={styles.chatIndicator}>
                            <div className={styles.typing}>typing....</div>
                          </div>
                        </div>
                        <div className={styles.userInfoSection}>
                          <div className={styles.userInfo4}>
                            <img
                              className={styles.maskGroupIcon}
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.ramonRidwan}>Agent Rue</b>
                              <div className={styles.online}>Offline</div>
                            </div>
                          </div>
                          <div className={styles.chatIndicator1}>
                            <div className={styles.counter2}>
                              <b className={styles.b1}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.userInfoSection}>
                          <div className={styles.userInfo2}>
                            <img
                              className={styles.maskGroupIcon}
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.ramonRidwan}>Agent Rue</b>
                              <div className={styles.online}>Offline</div>
                            </div>
                          </div>
                          <div className={styles.chatIndicator2}>
                            <div className={styles.counter2}>
                              <b className={styles.b1}>9</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.userInfoSection3}>
                          <div className={styles.userInfo8}>
                            <img
                              className={styles.maskGroupIcon}
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.ramonRidwan}>Agent Rue</b>
                              <div className={styles.online}>Offline</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sidebarBottom}>
                      <div className={styles.button}>
                        <div className={styles.buttonChild} />
                        <div className={styles.newTrade}>New Trade?</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatContainer}>
                    <div className={styles.chatPanel}>
                      <div className={styles.uilinegrayParent}>
                        <div className={styles.uilinegray}>
                          <div className={styles.line} />
                        </div>
                        <b className={styles.unread}>Unread</b>
                      </div>
                      <div className={styles.messageleft}>
                        <div className={styles.bg} />
                        <div className={styles.text}>
                          Hello am new to this system can i get a breakdown on
                          how it works?
                        </div>
                        <div className={styles.name}>{`Me, 10.:22 `}</div>
                      </div>
                      <div className={styles.messageleft1}>
                        <div className={styles.bg1} />
                        <div className={styles.text1}>
                          Please, can you go into details bout the service
                        </div>
                        <div className={styles.name1}>Me, 3 minutes ago</div>
                      </div>
                      <GroupComponent name1="Agent Rue, 10:24" />
                      <div className={styles.messageleft2}>
                        <div className={styles.bg} />
                        <div className={styles.text}>
                          Hello am new to this system can i get a breakdown on
                          how it works?
                        </div>
                        <div className={styles.name2}>
                          Agent Rue, 9 minutes ago
                        </div>
                      </div>
                      <GroupComponent
                        name1="Agent Rue, 9 minutes ago"
                        nameWidth="40.93%"
                        nameColor="#858585"
                      />
                    </div>
                    <div className={styles.inputField}>
                      <div className={styles.inputElements}>
                        <div className={styles.placeholder}>
                          Start typing here
                        </div>
                        <div className={styles.path753Parent}>
                          <img
                            className={styles.path753Icon}
                            alt=""
                            src="/path75-3.svg"
                          />
                          <div className={styles.uibuttonssqnormal}>
                            <div className={styles.btn} />
                            <b className={styles.btn1}>Send</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;