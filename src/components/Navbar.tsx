import { BsFillMenuButtonWideFill, BsLightbulbFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMessage, AiFillHome } from 'react-icons/ai'
import { useState } from 'react'
import ProjectBar from '@components/ProjectList'

const NavBarIcon = ({ icon, text = 'tooltip 💡', isLink = true, showProjects = false, setShowProjects }) => {
  const renderAction = () => {
    isLink ? setShowProjects(showProjects) : setShowProjects(!showProjects)
  }

  return (
    <div className="navbar-icon group" onClick={renderAction}>
      {icon}
      <span className="navbar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}

const Divider = () => <hr className="navbar-hr" />

export default function Navbar() {
  const [showProjects, setShowProjects] = useState(false)

  return (
    <>
      <div className="navbar-container">
        <NavBarIcon icon={<AiFillHome size="28" />} text={"Home"} setShowProjects={setShowProjects} />
        <Divider />
        <NavBarIcon icon={<BsFillPersonFill size="32" />} text={"About me"} setShowProjects={setShowProjects} />
        <NavBarIcon icon={<BsFillMenuButtonWideFill size="20" />} text={"Experience"} setShowProjects={setShowProjects} />
        <NavBarIcon icon={<BsLightbulbFill size="20" />} text={"Projects"} isLink={false} showProjects={showProjects} setShowProjects={setShowProjects} />
        <Divider />
        <NavBarIcon icon={<AiOutlineMessage size="22" />} text={"Contacts"} setShowProjects={setShowProjects} />
      </div>
      <div className={showProjects ? 'project-bar' : 'project-bar w-0'}>
        <ProjectBar />
      </div>
    </>
  )
}
