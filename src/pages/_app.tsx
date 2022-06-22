import "@styles/index.css"
import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import { Toaster } from 'react-hot-toast'
import ProjectBar from '@components/ProjectList'
import { useState } from "react"
import { ProjectContext } from '@lib/context'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showProjects, setShowProjects] = useState(false)
  const value = { showProjects, setShowProjects }

  return (
    <div className="flex bg-gray-700">
      <ProjectContext.Provider value={value}>
        <Navbar />
        <ProjectBar />
      </ProjectContext.Provider>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}
