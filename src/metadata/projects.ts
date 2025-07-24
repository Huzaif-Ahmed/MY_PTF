import Edhiring_pic from '../assets/Projects/edhiring-project.png';
import PressRelease_pic from '../assets/Projects/text-to-video-project.png';
import GenoRyzSta_pic from '../assets/Projects/genoryza-project.png';
import Garden_pic from '../assets/Projects/catalog-project.png';

interface Project {
    title: string;
    image: string;
    description: string;
    tags: string[];
    githubLink?: string;
    demoLink?: string;
    liveDemo?: string;
    figmaLink?: string;
    ResearchLink?: string;
}


const projects_data: Project[] = [
  {
    title: "EDHIRING : A REAL TIME HIRING PLATFORM",
    image: Edhiring_pic,
    description: "Led front-end development for a hiring platform, implemented OAuth/OTP verification system, designed LaTeX editor, and managed Scrum workflow resulting in 800+ job listings.",
    tags: ["freelance project"],
    liveDemo: "https://edhirings.com/",
    figmaLink: "https://www.figma.com/design/JACF97yCeMu7w2eZBNCSYS/Edhiring?node-id=0-1&t=vAknzwqiwpGf1li9-1"
  },
  {
    title: "Press Releases from text Using GEN-AI",
    image: PressRelease_pic,
    description: "Developed AI-powered video generation system using Stable Diffusion and NLP, implemented RBAC security and OAuth 2.0 for PIB officer workflows, enabling automated social media distribution.",
    tags: ["Next.js", "Node", "flask", "Colab", "Python", "TensorFlow", "Natural Language Processing"],
    demoLink: "https://drive.google.com/file/d/1TROmY4aPNaxLYEIIxaDwTX1djSHeo4sg/view",
    githubLink:"https://github.com/Huzaif-Ahmed/text_to_video"
  },
  {
    title: "GenoRyzSta: A Genomic Stature Odyssey",
    image: GenoRyzSta_pic,
    description: "Research project predicting Oryza Sativa plant height using genomic sequencing data with ML/DL models deployed on AWS.",
    tags: ["ReactJs", "flask", "Machine Learning", "Deep Learning", "AWS"],
    githubLink: "https://github.com/Huzaif-Ahmed/Agrigenomics",
    ResearchLink: "https://ijritcc.org/index.php/ijritcc/article/view/9642"
  },
  {
    title: "A Real-time Front-end Project For Web3",
    image: Garden_pic,
    description: "It was a real time working project on which i worked as an intern where i made changes to the UI and added some features to the project.",
    tags: ["ReactJs", "Nodejs", "Tailwindcss", "AWS", "Postgres", "Firebase", "Golang", "Mermaidjs"],
    liveDemo: "https://garden.finance"
  }
];

export default projects_data;