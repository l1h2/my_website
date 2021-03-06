import '@styles/index.css'
import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import { Toaster } from 'react-hot-toast'
import ProjectBar from '@components/ProjectList'
import { useState } from 'react'
import { ProjectContext, UserContext } from '@lib/context'
import UserState from '@components/UserState'
import { useUserData } from '@hooks/UserData'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showProjects, setShowProjects] = useState(false)
  const userData = useUserData()

  const value = { showProjects, setShowProjects }

  return (
    <div className="flex bg-gray-700">
      <ProjectContext.Provider value={value}>
        <Navbar />
        <ProjectBar />
        <UserContext.Provider value={userData}>
          <UserState />
          <Component {...pageProps} />
        </UserContext.Provider>
      </ProjectContext.Provider>
      <Toaster />
    </div>
  )
}
