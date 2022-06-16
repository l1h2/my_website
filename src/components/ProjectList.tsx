import { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { TiArrowRight } from 'react-icons/ti'

const webApps = ['Social App', 'Web Scrapper']
const artificialIntelligence = ['Tic-Tac-Toe', 'Spaceship']
const random = ['Intranet', 'Data Pipeline (ETL)']

const ProjectBlock = () => (
    <div className='project-block'>
      <h5 className='project-block-text'>Projects</h5>
    </div>
)

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  )
}

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  )
}

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <TiArrowRight size='24' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
)

export default function ProjectBar() {
  return (
    <>
      <ProjectBlock />
      <div className='project-container'>
        <Dropdown header='Web Apps' selections={webApps} />
        <Dropdown header='Machine Learning & AI' selections={artificialIntelligence} />
        <Dropdown header='Other' selections={random} />
      </div>
    </>
  )
}
