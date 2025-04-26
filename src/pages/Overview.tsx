import { FunctionComponent } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import MainContentNav from "../components/MainContentNav";
import MainContentTitle from "../components/MainContentTitle";
import TotalCard from "../components/TotalCard";
import Wallet1 from "../components/Wallet1";
import TableRow1 from "../components/TableRow1";
import styles from "./Overview.module.css";

const Overview: FunctionComponent = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview1}>
        <Header />
        <div className={styles.body}>
          <SideNav
            menuIcon="/menu-icon.svg"
            menuIcon1="/menu-icon-1.svg"
            menuIcon2="/menu-icon-2.svg"
            menuIcon3="/menu-icon-3.svg"
            menuIcon4="/menu-icon-4.svg"
            menuIcon5="/menu-icon-5.svg"
          />
          <div className={styles.contentContainer}>
            <div className={styles.mainContent}>
              <MainContentNav campaignsManagement="User Management   System Overview" />
              <MainContentTitle
                overview="Overview"
                group="/group.svg"
                showGroupIcon
              />
              <div className={styles.overviewTotal}>
                <TotalCard
                  prop="15000"
                  title="Total Number Of Transaction"
                  statNumberContainerItem="22.8%"
                  path2="/path-2.svg"
                  cardPopoverButton="/frame-1.svg"
                />
                <TotalCard
                  prop="43498"
                  title="Total Number Of Trade"
                  statsGap="unset"
                  numberPadding="unset"
                  numberWidth="28.23%"
                  statNumberContainerItem="11.8%"
                  statNumberContainerWidth="100%"
                  path2="/path-3.svg"
                  cardPopoverButton="/frame-1.svg"
                />
                <div className={styles.totalCard}>
                  <div className={styles.totalGraphic}>
                    <b className={styles.b}>87%</b>
                    <img
                      className={styles.totalGraphicChild}
                      alt=""
                      src="/frame-7.svg"
                    />
                  </div>
                  <div className={styles.statsSection}>
                    <b className={styles.title}>
                      <p className={styles.market}>{`Market `}</p>
                      <p className={styles.market}>Rate Value</p>
                    </b>
                    <div className={styles.stats}>
                      <div className={styles.number}>
                        <div className={styles.div}>11.8%</div>
                        <img
                          className={styles.path3Icon}
                          alt=""
                          src="/path-3.svg"
                        />
                      </div>
                      <img
                        className={styles.graphIcon}
                        alt=""
                        src="/graph.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.totalCardChild}
                    alt=""
                    src="/frame-1.svg"
                  />
                </div>
                <div className={styles.cardPopover}>
                  <img
                    className={styles.cardPopoverChild}
                    alt=""
                    src="/group-16@2x.png"
                  />
                  <div className={styles.view}>View</div>
                  <div className={styles.delete}>Delete</div>
                </div>
              </div>
              <div className={styles.conversionRate}>
                <div className={styles.sectionTitle}>
                  <img
                    className={styles.sectionTitleChild}
                    alt=""
                    src="/group-96.svg"
                  />
                  <b className={styles.conversionRateTo}>
                    Conversion Rate to Naira
                  </b>
                </div>
                <div className={styles.sectionBody}>
                  <div className={styles.table}>
                    <div className={styles.tableRow5}>
                      <div className={styles.tableColumn6}>N400.00</div>
                      <div className={styles.tableColumn5}>Bitcoin BTC</div>
                      <div className={styles.tableColumn4}>N400.00</div>
                      <div className={styles.tableColumn3}>UK E-Code Card</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                      <div className={styles.tableColumn1}>UK E-Code Card</div>
                    </div>
                    <div className={styles.tableRow4}>
                      <div className={styles.tableColumn6}>N400.00</div>
                      <div className={styles.tableColumn5}>Bitcoin BTC</div>
                      <div className={styles.tableColumn4}>N400.00</div>
                      <div className={styles.tableColumn3}>
                        UK Physical Card
                      </div>
                      <div className={styles.tableColumn2}>N400.00</div>
                      <div className={styles.tableColumn1}>
                        UK Physical Card
                      </div>
                    </div>
                    <div className={styles.tableRow3}>
                      <div className={styles.tableColumn6}>N400.00</div>
                      <div className={styles.tableColumn5}>Bitcoin BTC</div>
                      <div className={styles.tableColumn4}>N400.00</div>
                      <div className={styles.tableColumn3}>USA E-Code card</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                      <div className={styles.tableColumn1}>USA E-Code card</div>
                    </div>
                    <div className={styles.tableRow2}>
                      <div className={styles.tableColumn6}>N400.00</div>
                      <div className={styles.tableColumn53}>Bitcoin BTC</div>
                      <div className={styles.tableColumn4}>N400.00</div>
                      <div className={styles.tableColumn33}>USA Physical</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                      <div className={styles.tableColumn13}>USA Physical</div>
                    </div>
                    <div className={styles.tableRow1}>
                      <b className={styles.tableColumn54}>Bitcoin</b>
                      <b className={styles.tableColumn34}>Amazon Card</b>
                      <b className={styles.tableColumn14}>iTunes Card</b>
                    </div>
                  </div>
                  <img
                    className={styles.actionButtonIcon}
                    alt=""
                    src="/action-button.svg"
                  />
                </div>
              </div>
              <Wallet1
                walletLogoContainer="/wallet-logo-container.svg"
                starsOrnament="/stars-ornament.svg"
                backgroundMask="/background-mask.svg"
              />
              <div className={styles.statistics}>
                <div className={styles.statisticsWrapper}>
                  <div className={styles.statisticsWrapperChild} />
                  <img
                    className={styles.verticalLinesGridIcon}
                    alt=""
                    src="/verticallinesgrid.svg"
                  />
                  <img
                    className={styles.horizontalLinesGridIcon}
                    alt=""
                    src="/horizontallinesgrid.svg"
                  />
                  <div className={styles.yAxis}>
                    <div className={styles.div1}>10</div>
                    <div className={styles.div2}>20</div>
                    <div className={styles.div3}>30</div>
                    <div className={styles.div4}>40</div>
                    <div className={styles.div5}>50</div>
                    <div className={styles.div6}>60</div>
                  </div>
                  <div className={styles.barChartWrapper}>
                    <div className={styles.barContainer}>
                      <div className={styles.barLabel}>Jumia</div>
                      <div className={styles.bar} />
                    </div>
                    <div className={styles.barContainer1}>
                      <div className={styles.barContainer2}>Konga</div>
                      <div className={styles.bar1} />
                    </div>
                    <div className={styles.barContainer3}>
                      <div className={styles.barContainer4}>Aliexpress</div>
                      <div className={styles.bar2} />
                    </div>
                    <div className={styles.barContainer5}>
                      <div className={styles.barContainer6}>Paypal</div>
                      <div className={styles.bar3} />
                    </div>
                    <div className={styles.barContainer7}>
                      <div className={styles.barLabel1}>Tecno</div>
                      <div className={styles.bar4} />
                    </div>
                    <div className={styles.barContainer8}>
                      <div className={styles.barLabel2}>Ethereum</div>
                      <img className={styles.barIcon} alt="" src="/bar.svg" />
                    </div>
                    <div className={styles.barContainer9}>
                      <div className={styles.barLabel3}>Bitcoin</div>
                      <div className={styles.bar5} />
                    </div>
                    <div className={styles.barContainer10}>
                      <div className={styles.barLabel4}>Payoneer</div>
                      <div className={styles.bar6} />
                    </div>
                    <div className={styles.barContainer11}>
                      <div className={styles.barLabel5}>iTunes</div>
                      <div className={styles.bar7} />
                    </div>
                    <div className={styles.barContainer12}>
                      <div className={styles.barContainer4}>Google</div>
                      <div className={styles.bar8} />
                    </div>
                    <div className={styles.barContainer13}>
                      <div className={styles.barContainer6}>Amazon</div>
                      <div className={styles.bar9} />
                    </div>
                  </div>
                  <div className={styles.statisticDetailPopover}>
                    <div className={styles.popoverInfoBody}>
                      <b className={styles.infoTitle}>Avarage score</b>
                      <b className={styles.progressAmount}>146/217</b>
                      <div className={styles.progressBar}>
                        <div className={styles.base} />
                        <div className={styles.baseCopy} />
                      </div>
                    </div>
                    <img
                      className={styles.statisticClickIndicator}
                      alt=""
                      src="/statistic-click-indicator.svg"
                    />
                  </div>
                  <div className={styles.tableTitle}>
                    <b className={styles.titleAssesmentReport}>My Own Report</b>
                  </div>
                  <div className={styles.sectionTitle1}>
                    <img
                      className={styles.menuIcon}
                      alt=""
                      src="/group-96.svg"
                    />
                    <b className={styles.title1}>Statistics</b>
                    <div className={styles.menuPopover}>
                      <div className={styles.menuItem}>
                        <div className={styles.view1}>View</div>
                      </div>
                      <div className={styles.menuItem1}>
                        <div className={styles.view1}>Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.transactions}>
                <div className={styles.transactionWrapper}>
                  <div className={styles.sectionTitle2}>
                    <b className={styles.title2}>Transactions</b>
                    <img
                      className={styles.menuIcon1}
                      alt=""
                      src="/menu-1.svg"
                    />
                  </div>
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
                      tableCol3="/table-col-3.svg"
                      bitcoin="Bitcoin"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-3-1.svg"
                      bitcoin="Amazon"
                      tableButtonBackgroundColor="#f85d5d"
                      tableButtonBackground="unset"
                      buttonLabel="Failed"
                      tableCol8="/table-col-8-1.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="unset"
                      tableCol1Overflow="unset"
                      tableCol3="/table-col-3.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="unset"
                      tableButtonBackground="linear-gradient(178.18deg, #fd749b, #281ac8)"
                      buttonLabel="In Progress"
                      tableCol8="/table-col-8.svg"
                    />
                    <TableRow1
                      tableRow1Overflow="hidden"
                      tableCol1Overflow="hidden"
                      tableCol3="/table-col-3-1.svg"
                      bitcoin="Bitcoin"
                      tableButtonBackgroundColor="#5df888"
                      tableButtonBackground="unset"
                      buttonLabel="Completed"
                      tableCol8="/table-col-8.svg"
                    />
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

export default Overview;