// src/data/skills_data.ts
import JavaIcon from '../assets/java.png'
import JSIcon from '../assets/javascript.png'
import PyIcon from '../assets/python.png'
import CPPIcon from '../assets/cpp.png'
import ReactIcon from '../assets/React.png'
import NodeIcon from '../assets/nodejs.png'
import dotnet from '../assets/dotnet.png'
import springboot from '../assets/springboot.png'
import tsIcon from '../assets/typescript.png'
import MLicon from '../assets/machine-learning.png'
import DLicon from '../assets/deep-learning.png'
import AIicon from '../assets/Artificial-Intelligence.png'
import golang from '../assets/golang.png'
import sql from '../assets/sql.png'
import mongodb from '../assets/MongoDB.png'
import postgresSQL from '../assets/PostgresSQL.png'
import Vitejs from '../assets/Vitejs.png'
import AWS from '../assets/AWS.png'
import git from '../assets/Git.png'
import github from '../assets/Github.png'
import githubactions from '../assets/Github-Actions.png'
import NextjsIcon from '../assets/Nextjs.png'

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
]

export default skills_data