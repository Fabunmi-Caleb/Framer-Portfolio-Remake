function Skills() {
  return (
    <section className="mt-24 mx-10">
      <h2 className="text-5xl font-bold text-secondary text-center xl:text-left">
        Skills<span className="text-primary">.</span>
      </h2>
      <div className="skills-container space-y-5 lg:flex lg:justify-between lg:w-4/5 lg:text-left">
        <div className="frontend-container text-secondary text-lg space-y-1 h-[184px] flex flex-col justify-end">
          <h3 className="font-bold text-3xl text-secondary">Frontend</h3>
          <p>HTML5 & CSS 3</p>
          <p>Tailwind CSS & Bootstrap</p>
          <p>Javascript</p>
          <p>React Js</p>
        </div>
        <div className="backend-container  text-secondary text-lg space-y-1">
          <h3 className="font-bold text-3xl text-secondary">Backend</h3>
          <p>Node.JS</p>
          <p>Express.JS</p>
          <p>Mongo DB</p>
          <p>PHP & MySQL</p>
        </div>
        <div className="softskilld-container  text-secondary text-lg space-y-1">
          <h3 className="font-bold text-3xl text-secondary">Soft Skills</h3>
          <p>Effective Communication</p>
          <p>Collaboration</p>
          <p>Commitment</p>
          <p>Leadership</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
