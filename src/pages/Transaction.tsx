import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import MainContentNav from "../components/MainContentNav";
import MainContentTitle from "../components/MainContentTitle";
import TableRow1 from "../components/TableRow1";
import styles from "./Transaction.module.css";

const Transaction: FunctionComponent = () => {
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
    <div className={styles.transaction}>
      <div className={styles.transaction1}>
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
              <MainContentNav campaignsManagement="User Management   Transactions" />
              <MainContentTitle
                overview="Transactions"
                overviewWidth="unset"
                overviewDisplay="unset"
                group="/group1.svg"
                showGroupIcon={false}
              />
              <div className={styles.transactions}>
                <div className={styles.transactionWrapper}>
                  <div className={styles.transactionsTable}>
                    <div className={styles.tableRowHeader}>
                      <div className={styles.tableColHeader1}>
                        <b className={styles.date}>Date</b>
                      </div>
                      <div className={styles.tableColHeader2}>
                        <b className={styles.date}>Transaction Id</b>
                      </div>
                      <div className={styles.tableColHeader3}>
                        <b className={styles.date}>Type</b>
                      </div>
                      <div className={styles.tableColHeader4}>
                        <b className={styles.date}>Name</b>
                      </div>
                      <div className={styles.tableColHeader3}>
                        <b className={styles.date}>Value</b>
                      </div>
                      <div className={styles.tableColHeader4}>
                        <b className={styles.date}>Return</b>
                      </div>
                      <div className={styles.tableColHeader7}>
                        <b className={styles.date}>Status</b>
                      </div>
                      <div className={styles.tableColHeader4}>
                        <b className={styles.date}>Action</b>
                      </div>
                    </div>
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-31.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="#5df888"
                      tableButtonBackground="unset"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-3-11.svg"
                      bitcoin="Amazon"
                      tableButtonBackgroundColor="#f85d5d"
                      tableButtonBackground="unset"
                      buttonLabel="Failed"
                      tableCol8="/table-col-8-1.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-31.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="unset"
                      tableButtonBackground="linear-gradient(178.18deg, #fd749b, #281ac8)"
                      buttonLabel="In Progress"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-3-11.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="#5df888"
                      tableButtonBackground="unset"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-31.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="#5df888"
                      tableButtonBackground="unset"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-3-11.svg"
                      bitcoin="Amazon"
                      tableButtonBackgroundColor="#f85d5d"
                      tableButtonBackground="unset"
                      buttonLabel="Failed"
                      tableCol8="/table-col-8-1.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-31.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="unset"
                      tableButtonBackground="linear-gradient(178.18deg, #fd749b, #281ac8)"
                      buttonLabel="In Progress"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="hidden"
                      tableCol1Overflow="hidden"
                      tableCol3="/table-col-3-11.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="#5df888"
                      tableButtonBackground="unset"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
                  </div>
                  <div className={styles.menuPopover}>
                    <div className={styles.menuItem}>
                      <div className={styles.referral}>Place New</div>
                    </div>
                    <div className={styles.menuItem1}>
                      <div className={styles.referral}>Delete</div>
                    </div>
                  </div>
                  <div className={styles.sectionFooter}>
                    <div className={styles.button}>
                      <div className={styles.buttonChild} />
                      <div className={styles.viewMore}>View More</div>
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

export default Transaction;