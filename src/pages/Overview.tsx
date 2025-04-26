import { FunctionComponent } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import MainContentNav from "../components/MainContentNav";
import MainContentTitle from "../components/MainContentTitle";
import TotalCard from "../components/TotalCard";
import Wallet1 from "../components/Wallet1";
import FrameComponent from "../components/FrameComponent";
import TableRow1 from "../components/TableRow1";
import styles from "./Overview.module.css";

const Overview: FunctionComponent = () => {
  return (
    <div className={styles.overview}>
      <main className={styles.overview1}>
        <Header />
        <section className={styles.body}>
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
                  statsGap="26px"
                  numberPadding="unset"
                  numberWidth="35px"
                  statNumberContainerItem="11.8%"
                  statNumberContainerWidth="27px"
                  path2="/path-3.svg"
                  cardPopoverButton="/frame-1.svg"
                  frameDivPadding="unset"
                  frameDivPadding1="7px 0px 0px"
                />
                <div className={styles.totalCard}>
                  <div className={styles.totalGraphic}>
                    <b className={styles.b}>87%</b>
                    <img
                      className={styles.totalGraphicChild}
                      loading="lazy"
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
                      <div className={styles.numberWrapper}>
                        <div className={styles.number}>
                          <div className={styles.totalTransactionsValueParent}>
                            <div className={styles.totalTransactionsValue}>
                              11.8%
                            </div>
                            <div className={styles.path3Wrapper}>
                              <img
                                className={styles.path3Icon}
                                alt=""
                                src="/path-3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.graphIcon}
                        loading="lazy"
                        alt=""
                        src="/graph.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.totalCardChild}
                    loading="lazy"
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
                  <b className={styles.conversionRateTo}>
                    Conversion Rate to Naira
                  </b>
                  <div className={styles.sectionTitleInner}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/group-96.svg"
                    />
                  </div>
                </div>
                <div className={styles.sectionBody}>
                  <div className={styles.table}>
                    <div className={styles.tableRow1Wrapper}>
                      <div className={styles.tableRow1}>
                        <b className={styles.tableColumn1}>iTunes Card</b>
                        <b className={styles.tableColumn1}>Amazon Card</b>
                        <b className={styles.tableColumn1}>Bitcoin</b>
                      </div>
                    </div>
                    <div className={styles.tableRow2}>
                      <div className={styles.tableColumn11}>USA Physical</div>
                      <div className={styles.tableColumn2Wrapper}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn11}>USA Physical</div>
                      <div className={styles.tableColumn4Wrapper}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn11}>Bitcoin BTC</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                    </div>
                    <div className={styles.tableRow3}>
                      <div className={styles.tableColumn12}>
                        USA E-Code card
                      </div>
                      <div className={styles.tableColumn2Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>
                        USA E-Code card
                      </div>
                      <div className={styles.tableColumn4Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>Bitcoin BTC</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                    </div>
                    <div className={styles.tableRow3}>
                      <div className={styles.tableColumn12}>
                        UK Physical Card
                      </div>
                      <div className={styles.tableColumn2Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>
                        UK Physical Card
                      </div>
                      <div className={styles.tableColumn4Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>Bitcoin BTC</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                    </div>
                    <div className={styles.tableRow3}>
                      <div className={styles.tableColumn12}>UK E-Code Card</div>
                      <div className={styles.tableColumn2Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>UK E-Code Card</div>
                      <div className={styles.tableColumn4Container}>
                        <div className={styles.tableColumn2}>N400.00</div>
                      </div>
                      <div className={styles.tableColumn12}>Bitcoin BTC</div>
                      <div className={styles.tableColumn2}>N400.00</div>
                    </div>
                  </div>
                  <div className={styles.actionButtonWrapper}>
                    <img
                      className={styles.actionButtonIcon}
                      loading="lazy"
                      alt=""
                      src="/action-button.svg"
                    />
                  </div>
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
                    className={styles.horizontalLinesGridIcon}
                    alt=""
                    src="/horizontallinesgrid.svg"
                  />
                  <div className={styles.statisticsChartContainer}>
                    <div className={styles.totalTransactionsValueParent}>
                      <b className={styles.titleAssesmentReport}>
                        My Own Report
                      </b>
                    </div>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartContent}>
                        <div className={styles.chartArea}>
                          <div className={styles.yAxis}>
                            <div className={styles.legendLabel}>60</div>
                            <div className={styles.yAxisTicks}>
                              <div className={styles.legendLabel}>50</div>
                              <div className={styles.legendLabel}>40</div>
                              <div className={styles.legendLabel}>30</div>
                              <div className={styles.legendLabel}>20</div>
                              <div className={styles.legendLabel}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.verticalGridContainer}>
                          <img
                            className={styles.verticalLinesGridIcon}
                            loading="lazy"
                            alt=""
                            src="/verticallinesgrid.svg"
                          />
                        </div>
                        <div className={styles.barChartArea}>
                          <div className={styles.barChartContent}>
                            <div className={styles.barChartWrapper}>
                              <div className={styles.barContainerWrapper}>
                                <div className={styles.barContainer}>
                                  <div className={styles.barContent}>
                                    <div className={styles.bar} />
                                  </div>
                                  <div className={styles.barLabel}>Amazon</div>
                                </div>
                              </div>
                              <div className={styles.barContainerContainer}>
                                <div className={styles.barContainer1}>
                                  <div className={styles.barWrapper}>
                                    <div className={styles.bar1} />
                                  </div>
                                  <div className={styles.barLabel1}>Google</div>
                                </div>
                              </div>
                              <div className={styles.barContainerFrame}>
                                <div className={styles.barContainer}>
                                  <div className={styles.barFrame}>
                                    <div className={styles.bar2} />
                                  </div>
                                  <div className={styles.barLabel2}>iTunes</div>
                                </div>
                              </div>
                              <div className={styles.barContainer}>
                                <div className={styles.barWrapper1}>
                                  <div className={styles.bar3} />
                                </div>
                                <div className={styles.barLabel3}>Payoneer</div>
                              </div>
                              <div className={styles.barContainerWrapper}>
                                <div className={styles.barContainer4}>
                                  <div className={styles.barWrapper2}>
                                    <div className={styles.bar4} />
                                  </div>
                                  <div className={styles.barLabel4}>
                                    Bitcoin
                                  </div>
                                </div>
                              </div>
                              <div className={styles.barContainerWrapper}>
                                <div className={styles.barContainer5}>
                                  <div className={styles.barWrapper3}>
                                    <img
                                      className={styles.barIcon}
                                      loading="lazy"
                                      alt=""
                                      src="/bar.svg"
                                    />
                                  </div>
                                  <div className={styles.barLabel5}>
                                    Ethereum
                                  </div>
                                </div>
                              </div>
                              <div className={styles.barContainerWrapper}>
                                <div className={styles.barContainer}>
                                  <div className={styles.barWrapper4}>
                                    <div className={styles.bar5} />
                                  </div>
                                  <div className={styles.barLabel6}>Tecno</div>
                                </div>
                              </div>
                              <FrameComponent barLabel="Paypal" />
                              <FrameComponent
                                frameDivPadding="0px 9px 0px 0px"
                                barHeight="283px"
                                barLabel="Aliexpress"
                                barLabelWidth="66px"
                                frameDivPadding1="0px 25px 0px 24px"
                                barHeight1="283px"
                                barContainerWidth="66px"
                              />
                              <div className={styles.barContainerWrapper}>
                                <div className={styles.barContainer}>
                                  <div className={styles.barWrapper5}>
                                    <div className={styles.bar6} />
                                  </div>
                                  <div className={styles.barContainer8}>
                                    Konga
                                  </div>
                                </div>
                              </div>
                              <div className={styles.barContainer}>
                                <div className={styles.barWrapper6}>
                                  <div className={styles.bar7} />
                                </div>
                                <div className={styles.barContainer8}>
                                  Jumia
                                </div>
                              </div>
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
                            <div className={styles.clickIndicatorContainer}>
                              <img
                                className={styles.statisticClickIndicator}
                                loading="lazy"
                                alt=""
                                src="/statistic-click-indicator.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sectionTitleWrapper}>
                    <div className={styles.sectionTitle1}>
                      <b className={styles.title1}>Statistics</b>
                      <div className={styles.menuContainer}>
                        <div className={styles.menuWrapper}>
                          <div className={styles.menuContent}>
                            <img
                              className={styles.frameChild}
                              loading="lazy"
                              alt=""
                              src="/group-96.svg"
                            />
                          </div>
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
                  </div>
                </div>
              </div>
              <div className={styles.transactions}>
                <div className={styles.transactionWrapper}>
                  <div className={styles.sectionTitle2}>
                    <b className={styles.title2}>Transactions</b>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
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
                    <button className={styles.button}>
                      <div className={styles.buttonChild} />
                      <div className={styles.viewMore}>View More</div>
                    </button>
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

export default Overview;
