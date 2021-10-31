import type { NextPage } from 'next'
import {useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import AuthContext from '../stores/authContext'

const Home: NextPage = () => {
  // fetch('.netlify/functions/testFunction')
  // .then((res) => res.json())
  // .then((res) => console.log(res.data))
  const {user, login, logout, authReady}  = useContext(AuthContext)
  console.log('user',user)
 


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        { authReady &&
        <div>
       {!user && <button onClick={login} style={homeStyles.btn} > Login/Register </button>}
       {/* {user && <p>{user?.email}</p>}
       <div>{JSON.stringify(user)}</div>
       {user && <button onClick={logout}>logout</button>} */}
        </div>
        } 
      
      </main>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
const homeStyles:any = {
  btn: {
    height:'50px',
    backgroundColor:'#ffb703',
    color:'#023047',
    padding: '10px 20px',
    fontSize: '1.2em',
    fontWeight: '700',
    borderRadius: '30px',
    border: 'none',
  }
  // container: {
  //   minHeight: '100vh',
  //   padding: '0 0.5rem',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  // },
  // main: {
  //   padding: '5rem 0',
  //   flex: '1',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // footer: {
  //   width: '100%',
  //   height: '100px',
  //   borderTop: '1px solid #eaeaea',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
  

}
export default Home
