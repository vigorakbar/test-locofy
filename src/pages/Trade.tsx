import { FunctionComponent } from "react";
import Header from "../components/Header";
import MainContentNav from "../components/MainContentNav";
import MainContentTitle from "../components/MainContentTitle";
import MessageList from "../components/MessageList";
import GroupComponent from "../components/GroupComponent";
import styles from "./Trade.module.css";

const Trade: FunctionComponent = () => {
  return (
    <div className={styles.trade}>
      <main className={styles.trade1}>
        <Header headerAlignSelf="unset" headerWidth="1500px" />
        <section className={styles.body}>
          <div className={styles.sideNav}>
            <div className={styles.overviewMenuWrapper}>
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
            <div className={styles.tradeMenuWrapper}>
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
            <div className={styles.walletMenuWrapper}>
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
            <div className={styles.transactionMenuWrapper}>
              <div className={styles.transactionMenu}>
                <img
                  className={styles.menuIcon3}
                  loading="lazy"
                  alt=""
                  src="/menu-icon-3.svg"
                />
                <div className={styles.menuLabel3}>Transactions</div>
              </div>
              <div className={styles.counter1}>
                <b className={styles.b}>19</b>
              </div>
            </div>
            <div className={styles.overviewMenuWrapper}>
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
            <div className={styles.overviewMenuWrapper}>
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
                            loading="lazy"
                            alt=""
                            src="/mask-group.svg"
                          />
                          <div className={styles.userInfo1}>
                            <b className={styles.ramonRidwan}>Ramon Ridwan</b>
                            <div className={styles.userStatus}>
                              <div className={styles.online}>Online</div>
                            </div>
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
                              loading="lazy"
                              alt=""
                              src="/mask-group.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.agentRue}>Agent Rue</b>
                              <div className={styles.userStatus}>
                                <div className={styles.online}>Online</div>
                              </div>
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
                              loading="lazy"
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.agentRue}>Agent Rue</b>
                              <div className={styles.userStatus}>
                                <div className={styles.online}>Offline</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.chatIndicator1}>
                            <div className={styles.counter2}>
                              <b className={styles.b}>10</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.userInfoSection}>
                          <div className={styles.userInfo2}>
                            <img
                              className={styles.maskGroupIcon}
                              loading="lazy"
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.agentRue}>Agent Rue</b>
                              <div className={styles.userStatus}>
                                <div className={styles.online}>Offline</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.chatIndicator2}>
                            <div className={styles.counter2}>
                              <b className={styles.b}>9</b>
                            </div>
                          </div>
                        </div>
                        <div className={styles.userInfoSection3}>
                          <div className={styles.userInfo8}>
                            <img
                              className={styles.maskGroupIcon}
                              loading="lazy"
                              alt=""
                              src="/mask-group-2.svg"
                            />
                            <div className={styles.userInfo1}>
                              <b className={styles.agentRue}>Agent Rue</b>
                              <div className={styles.userStatus}>
                                <div className={styles.online}>Offline</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sidebarBottom}>
                      <button className={styles.button}>
                        <div className={styles.buttonChild} />
                        <div className={styles.newTrade}>New Trade?</div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.chatContainer}>
                    <div className={styles.chatPanel}>
                      <div className={styles.chatMessages}>
                        <MessageList name1="Me, 10.:22 " />
                        <GroupComponent name1="Agent Rue, 10:24" />
                      </div>
                      <div className={styles.nextMessage}>
                        <div className={styles.messageleft}>
                          <div className={styles.name}>Me, 3 minutes ago</div>
                          <input
                            className={styles.nextUserContent}
                            placeholder="Please, can you go into details bout the service"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className={styles.previousMessages}>
                        <div className={styles.previousMessageList}>
                          <div className={styles.previousMessageHeaderParent}>
                            <div className={styles.previousMessageHeader}>
                              <b className={styles.unread}>Unread</b>
                              <div className={styles.uilinegrayWrapper}>
                                <div className={styles.uilinegray}>
                                  <div className={styles.line} />
                                </div>
                              </div>
                            </div>
                            <MessageList
                              messageListWidth="unset"
                              messageListPadding="0px 14px"
                              name1="Agent Rue, 9 minutes ago"
                              nameWidth="131.4px"
                            />
                          </div>
                        </div>
                        <GroupComponent
                          name1="Agent Rue, 9 minutes ago"
                          nameWidth="133.4px"
                          nameColor="#858585"
                        />
                      </div>
                    </div>
                    <div className={styles.inputField}>
                      <div className={styles.inputElements}>
                        <input
                          className={styles.messageField}
                          placeholder="Start typing here"
                          type="text"
                        />
                        <div className={styles.sendButton}>
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
        </section>
      </main>
    </div>
  );
};

export default Trade;
