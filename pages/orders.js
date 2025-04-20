import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Orders.module.css';

export default function Orders() {
  const [orders, setOrders] = useState([
    { time: '08:14:31', client: 'AAA001', ticker: 'RELIANCE', tickerType: 'live', side: 'Buy', product: 'CNC', qty: '50/100', price: '250.50' },
    { time: '08:14:31', client: 'AAA003', ticker: 'MRF', tickerType: '', side: 'Buy', product: 'NRML', qty: '10/20', price: '2,700.00' },
    { time: '08:14:31', client: 'AAA002', ticker: 'ASIANPAINT', tickerType: 'live', side: 'Buy', product: 'NRML', qty: '10/30', price: '1,500.60' },
    { time: '08:14:31', client: 'AAA002', ticker: 'TATAINVEST', tickerType: '', side: 'Sell', product: 'INTRADAY', qty: '10/10', price: '2,300.10' },
  ]);

  const [activeFilters, setActiveFilters] = useState(['RELIANCE', 'ASIANPAINT']);
  
  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Open Orders</title>
        <meta name="description" content="Open Orders Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.marketInfo}>
          <div className={styles.marketItem}>
            <span>SIGNORIA</span>
            <span className={styles.neutral}>0.00</span>
          </div>
          <div className={styles.marketItem}>
            <span>NIFTY BANK</span>
            <span className={styles.positive}>52,523.50</span>
          </div>
          <div className={styles.marketItem}>
            <span>NIFTY FIN SERVICE</span>
            <span className={styles.positive}>25,235.75</span>
          </div>
          <div className={styles.marketItem}>
            <span>RELCHEM.Q</span>
            <span className={styles.positive}>162.75</span>
          </div>
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>MARKETWATCH</a>
          <a href="#" className={styles.navLink}>EXCHANGE FILES</a>
          <a href="#" className={styles.navLink}>PORTFOLIO</a>
          <a href="#" className={styles.navLink}>FUNDS</a>
          <div className={styles.userAvatar}>LK</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Open Orders</h1>
          <button className={styles.downloadBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </button>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.clientSearch}>
            <div className={styles.clientId}>AAA002</div>
            <button className={styles.clearBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={styles.searchBox}>
            <span className={styles.searchLabel}>Lait</span>
            <button className={styles.clearSearchBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input type="text" placeholder="Search for a stock, future, option or index" className={styles.searchInput} />
          </div>
          <div className={styles.activeFilters}>
            {activeFilters.map((filter, index) => (
              <div key={index} className={styles.filterTag}>
                <span>{filter}</span>
                <button onClick={() => removeFilter(filter)} className={styles.removeFilterBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <button className={styles.cancelAllBtn}>Cancel all</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.ordersTable}>
            <thead>
              <tr>
                <th className={styles.sortable}>
                  Time
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th className={styles.sortable}>
                  Client
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th>Ticker</th>
                <th className={styles.sortable}>
                  Side
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th className={styles.sortable}>
                  Product
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th className={styles.sortable}>
                  Qty (Executed/Total)
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th className={styles.sortable}>
                  Price
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td data-label="Time">{order.time}</td>
                  <td data-label="Client">{order.client}</td>
                  <td data-label="Ticker">
                    {order.ticker}
                    {order.tickerType === 'live' && (
                      <span className={styles.liveIndicator}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </span>
                    )}
                  </td>
                  <td data-label="Side" className={order.side === 'Buy' ? styles.buyOrder : styles.sellOrder}>{order.side}</td>
                  <td data-label="Product">{order.product}</td>
                  <td data-label="Quantity">{order.qty}</td>
                  <td data-label="Price">{order.price}</td>
                  <td>
                    <button className={styles.actionBtn}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button className={styles.paginationBtn}>Previous</button>
          <span className={styles.pageIndicator}>Page 1</span>
          <button className={styles.paginationBtn}>Next</button>
        </div>
      </main>
    </div>
  );
}