import Head from 'next/head';
import { FlightCard } from '../components';
import { useApi } from '../utility/api';
import styles from '../styles/Home.module.css';


export default function Home() {
    const {
        response, loading, error, handleChange,
    } = useApi();
    return (
        <div className={styles.container}>
            <Head>
                <title>Alibaba Challenge</title>
            </Head>

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
                                    <p>{error}</p>
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
