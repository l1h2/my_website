import { createContext } from 'react';

export const UserContext = createContext({ user: null, username: null })

export const ProjectContext = createContext({ showProjects: false, setShowProjects: (showProjects: boolean) => {}})
