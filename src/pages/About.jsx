function About() {
  return (
    <section className="mx-10 pt-24 xl:flex xl:justify-between xl:pt-40">
      <div className="xl:text-left text-center">
        <p className="text-2xl mb-3 ml-2  text-secondary">Hey, I'm Luca 👋🏻</p>
        <h2 className="text-6xl font-bold text-secondary md:text-8xl">
          <span className="text-primary">Front</span>end <br /> Developer
        </h2>
        <p className=" my-4 text-2xl  text-secondary">
          I'm a frontend developer based in Italy, I'll help you <br /> build
          beautiful websites your users will love.
        </p>
        <div className=" py-4 space-x-2">
          <a
            href="#"
            className="border-transparent rounded-md p-2 bg-primary text-white font-semibold hover:bg-purple-600 transition-all duration-200"
          >
            Get in touch
          </a>
          <a
            href="#"
            className="border border-gray-700 rounded-md p-2 font-semibold text-secondary hover:text-white hover:bg-secondary transition-all duration-200"
          >
            Browse Projects
          </a>
        </div>
      </div>
      <div className="max-w-fit mt-10 mx-auto border border-purple-400 p-7 rounded-full xl:mr-0 xl:mt-0">
        <img
          className=" xl:size-[340px] rounded-full"
          src="https://framerusercontent.com/images/0x51HAEDvfyvtBcuM28afgPiKcU.webp?scale-down-to=512"
          alt="about-picture"
        />
      </div>
    </section>
  );
}

export default About;
