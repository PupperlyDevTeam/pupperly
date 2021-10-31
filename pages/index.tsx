import type { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import AuthContext from '../stores/authContext';
import { style } from '@mui/system';

const Home: NextPage = () => {
  // fetch('.netlify/functions/testFunction')
  // .then((res) => res.json())
  // .then((res) => console.log(res.data))
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log('user', user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Sue+Ellen+Francisco&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        {authReady && (
          <div className={styles.desktopBtn}>
            {!user && (
              <button onClick={login} style={homeStyles.btn} id="desktopBtn">
                {/* <button onClick={login} style={homeStyles.btn}> */}{' '}
                Login/Register{' '}
              </button>
            )}
            {/* {user && <p>{user?.email}</p>}
       <div>{JSON.stringify(user)}</div> */}
          </div>
        )}
      </main>
      <section className={styles.mobileBtn}>
        {authReady && (
          <div>
            {!user && (
              <button onClick={login} style={homeStyles.btn}>
                {' '}
                Login/Register{' '}
              </button>
            )}
            {/* {user && <p>{user?.email}</p>}
       <div>{JSON.stringify(user)}</div> */}
          </div>
        )}
      </section>
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <Image
            src="/medhx.png"
            alt="medical cross "
            width={100}
            height={100}
          ></Image>
          <p>
            All your pet's medical records in one convenient place, accessible
            from anywhere.
          </p>
        </div>
      </section>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
const homeStyles: any = {
  btn: {
    height: '50px',
    backgroundColor: '#ffb703',
    color: '#023047',
    padding: '10px 20px',
    fontSize: '1.2em',
    fontWeight: '700',
    borderRadius: '30px',
    border: 'none',
  },
  features: {
    backgroundColor: '#8ecae6',
  },
};
export default Home;
