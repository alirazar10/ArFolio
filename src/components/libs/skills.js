const Skills = ({ skills }) => {
  const halfLength = Math.ceil(skills.length / 2);
  const leftColumn = skills.slice(0, halfLength);
  const rightColumn = skills.slice(halfLength);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col  gap-1.5">
        {leftColumn.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-row-reverse justify-end items-center gap-1.5"
          >
            <h3
              className={`text-[11px] lg:text-[13px] text-secondary-200 hover:text-secondary-100`}
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col  gap-1.5">
        {rightColumn.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-row-reverse justify-end items-center gap-1.5"
          >
            <h3
              className={`text-[11px] lg:text-[13px] text-secondary-200 hover:text-secondary-100`}
            >
              {skill.name}
            </h3>
            {/* <div className="flex items-center">
              {Array.from({ length: skill.rate }, (_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-secondary-200 mr-1"
                ></div>
              ))}
              {Array.from(
                { length: 5 - skill.rate },
                (_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5  rounded-full bg-secondary-400 mr-1"
                  ></div>
                )
              )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
