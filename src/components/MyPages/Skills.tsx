
import skills_data from "../../metadata/skills";
import { AnimatedCard } from "../AnimatedCard";
import './css/Profile.css'


const Skills = () => {
    return (
        <>
        <h2 style={{ marginBottom: '15px', fontSize: '2rem' }} className="section-title">
              Skills
            </h2>
            

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' ,}}>
              {skills_data.map((skill) => (
                <AnimatedCard
                  key={skill.id}
                  label={skill.name}
                  path={skill.iconSrc}
                />
              ))}
            </div>
        </>
    )
};

export default Skills;
