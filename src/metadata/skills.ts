// src/data/skills_data.ts
import JavaIcon from '../assets/skills/java.png'
import JSIcon from '../assets/skills/javascript.png'
import PyIcon from '../assets/skills/python.png'
import CPPIcon from '../assets/skills/cpp.png'
import ReactIcon from '../assets/skills/React.png'
import NodeIcon from '../assets/skills/nodejs.png'
import dotnet from '../assets/skills/dotnet.png'
import springboot from '../assets/skills/springboot.png'
import tsIcon from '../assets/skills/typescript.png'
import MLicon from '../assets/skills/machine-learning.png'
import DLicon from '../assets/skills/deep-learning.png'
import AIicon from '../assets/skills/Artificial-Intelligence.png'
import golang from '../assets/skills/golang.png'
import sql from '../assets/skills/sql.png'
import mongodb from '../assets/skills/MongoDB.png'
import postgresSQL from '../assets/skills/PostgresSQL.png'
import Vitejs from '../assets/skills/Vitejs.png'
import AWS from '../assets/skills/AWS.png'
import git from '../assets/skills/Git.png'
import github from '../assets/skills/Github.png'
import githubactions from '../assets/skills/Github-Actions.png'
import NextjsIcon from '../assets/skills/Nextjs.png'
import DockerIcon from '../assets/skills/Docker.png'
import LinuxIcon from '../assets/skills/linux.png'

export interface Skill {
    id: number
    name: string
    iconSrc: string
    category: string // Adding category for better organization
}

const skills_data: Skill[] = [
    // Languages
    { id: 1, name: "Java", iconSrc: JavaIcon, category: "Languages" },
    { id: 2, name: "JavaScript", iconSrc: JSIcon, category: "Languages" },
    { id: 3, name: "TypeScript", iconSrc: tsIcon, category: "Languages" },
    { id: 4, name: "Python", iconSrc: PyIcon, category: "Languages" },
    { id: 5, name: "C++", iconSrc: CPPIcon, category: "Languages" },
    { id: 13, name: "Golang", iconSrc: golang, category: "Languages" },
    
    // Frontend
    { id: 6, name: "React", iconSrc: ReactIcon, category: "Frontend" },
    { id: 22, name: "Next.js", iconSrc: NextjsIcon, category: "Frontend" },
    { id: 17, name: "Vite.js", iconSrc: Vitejs, category: "Frontend" },
    
    // Backend
    { id: 7, name: "Node.js", iconSrc: NodeIcon, category: "Backend" },
    { id: 8, name: ".Net", iconSrc: dotnet, category: "Backend" },
    { id: 9, name: "Spring Boot", iconSrc: springboot, category: "Backend" },
    
    // Database
    { id: 14, name: "SQL", iconSrc: sql, category: "Database" },
    { id: 15, name: "MongoDB", iconSrc: mongodb, category: "Database" },
    { id: 16, name: "PostgreSQL", iconSrc: postgresSQL, category: "Database" },
    
    // AI and ML
    { id: 10, name: "Machine Learning", iconSrc: MLicon, category: "AI/ML" },
    { id: 11, name: "Deep Learning", iconSrc: DLicon, category: "AI/ML" },
    { id: 12, name: "AI", iconSrc: AIicon, category: "AI/ML" },
    
    // Others
    { id: 18, name: "AWS", iconSrc: AWS, category: "Others" },
    { id: 19, name: "Git", iconSrc: git, category: "Others" },
    { id: 20, name: "Github", iconSrc: github, category: "Others" },
    { id: 21, name: "Github Actions", iconSrc: githubactions, category: "Others" },
    { id: 23, name: "Docker", iconSrc: DockerIcon, category: "Others" },
    { id: 24, name: "Linux", iconSrc: LinuxIcon, category: "Others" }
]

export default skills_data