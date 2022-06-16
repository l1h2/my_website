import "@styles/index.css"
import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="flex bg-gray-700">
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </main>
  )
}
