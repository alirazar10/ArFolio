interface Skill {
  name: string;
  rate?: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps): React.ReactElement => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="font-mono text-[11px] lg:text-xs tracking-wide px-3 py-1.5 rounded-full border border-secondary-600 text-primary-200 hover:border-accent-500 hover:text-accent-500 transition-colors duration-300"
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default Skills;
