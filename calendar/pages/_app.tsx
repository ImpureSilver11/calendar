import '../styles/global.css'
import { AppProps } from 'next/app'
import Header from '../components/header'
import LeftSideBar from '../components/left-side-bar'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Header />
      <LeftSideBar />
      <Component {...pageProps} />
    </div>
  )
}