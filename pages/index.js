/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Head from 'next/head';
import { useState } from 'react';
import { FlightCard } from '../components';
import { useApi } from '../utility/api';
import styles from '../styles/Home.module.css';

export default function Home() {
    const {
        response, loading, error, handleChange,
    } = useApi();
    const [theme, setTheme] = useState('light');
    return (
        <div className={`${styles.container} ${theme}`}>
            <Head>
                <title>Alibaba Challenge</title>
            </Head>
            <div className={theme === 'dark' ? 'toggle-light' : 'toggle-dark'}>
                <h4 className="light-mode" onClick={() => setTheme('light')}>
                    Light
                </h4>
                <h4 className="dark-mode" onClick={() => setTheme('dark')}>
                    Dark
                </h4>
            </div>

            <main className={styles.main}>
                <form>
                    <input type="text" onChange={(e) => handleChange(e)} placeholder="Flights from MHD to THR tomorrow" />
                </form>
                <section>
                    {loading ? (
                        <p>loading...</p>
                    ) : (
                        <div>
                            {error && (
                                <div>
                                    <p>{error.message}</p>
                                </div>
                            )}
                            {response && response.departing
                            && response?.departing.map((item) => <FlightCard data={item} key={item.uniqueKey} />)}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
