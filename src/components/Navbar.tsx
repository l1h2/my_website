import { BsFillMenuButtonWideFill, BsLightbulbFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMessage, AiFillHome } from 'react-icons/ai'
import { useContext } from 'react'
import Link from 'next/link'
import { ProjectContext } from '@lib/context'

const NavBarIcon = ({ icon, text = 'tooltip 💡', isLink = true, link = "" }) => {
  const { showProjects, setShowProjects } = useContext(ProjectContext)
  
  const renderAction = () => {
    isLink ? setShowProjects(false) : setShowProjects(!showProjects)
  }

  return (
    <Link href={link}>
      <div className="navbar-icon group" onClick={renderAction}>
        {icon}
        <span className="navbar-tooltip group-hover:scale-100">
          {text}
        </span>
      </div>
    </Link>
  )
}

const Divider = () => <hr className="navbar-hr" />

export default function Navbar() {
  return (
    <div className="navbar-container">
      <NavBarIcon icon={<AiFillHome size="28" />} text={"Home"} link={"/"} />
      <Divider />
      <NavBarIcon icon={<BsFillPersonFill size="32" />} text={"About me"} link={"/about_me"} />
      <NavBarIcon icon={<BsFillMenuButtonWideFill size="20" />} text={"Experience"} link={"/experience"} />
      <NavBarIcon icon={<BsLightbulbFill size="20" />} text={"Projects"} isLink={false} />
      <Divider />
      <NavBarIcon icon={<AiOutlineMessage size="22" />} text={"Contacts"} link={"/contacts"} />
    </div>
  )
}
