const TechStack = () => {
  const TechStacksIcon = [
    { icon: "./HtmlIcon.svg", name: "HTML" },
    { icon: "./cssIcon.svg", name: "CSS" },
    { icon: "./javascriptIcon.svg", name: "Javascript" },
    { icon: "./typescriptIcon.png", name: "Typescript" },
    { icon: "./ReactIcon.svg", name: "React Native" },
    { icon: "./TailwindIcon.svg", name: "Tailwind" },
    { icon: "./GitIcon.svg", name: "Git" },
    { icon: "./firerbaseIcon.png", name: "Firebase" },
    { icon: "./githubIcon.svg", name: "Github" },
  ];

  return (
    <section className="w-full pt-20 md:pt-40 pb-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D3D3D3]/5 to-transparent pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 space-y-3">
          <div className="inline-block">
            <p className="text-4xl md:text-5xl text-[#D3D3D3] font-bold tracking-tight">
              My Stack
            </p>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#D3D3D3] to-transparent mt-2 rounded-full" />
          </div>
          <p className="text-[#A7A7A7] text-lg text-center max-w-2xl">
            Technologies Stacks I&#39;ve been working with recently
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {TechStacksIcon.map((items, index) => {
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div
                  className="relative bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 
                              border border-[#D3D3D3]/10 
                              transition-all duration-300 ease-out
                              hover:border-[#D3D3D3]/30
                              hover:shadow-[0_0_30px_rgba(211,211,211,0.1)]
                              hover:-translate-y-2
                              aspect-square flex flex-col items-center justify-center"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D3D3D3]/0 to-[#D3D3D3]/0 
                                group-hover:from-[#D3D3D3]/5 group-hover:to-transparent 
                                transition-all duration-300"
                  />

                  {/* Icon container */}
                  <div
                    className="relative z-10 w-full h-full flex items-center justify-center
                                transition-transform duration-300 group-hover:scale-110"
                  >
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-lg"
                      src={items.icon}
                      alt={items.name}
                    />
                  </div>

                  {/* Tool name - appears on hover */}
                  <div
                    className="absolute bottom-4 left-0 right-0 text-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  >
                    <p className="text-[#D3D3D3] text-sm font-medium">
                      {items.name}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div
                  className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#D3D3D3]/0 
                              group-hover:border-[#D3D3D3]/50 transition-all duration-300 rounded-tl-lg"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#D3D3D3]/0 
                              group-hover:border-[#D3D3D3]/50 transition-all duration-300 rounded-br-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
