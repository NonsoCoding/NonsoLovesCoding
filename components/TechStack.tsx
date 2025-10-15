





const TechStack = () => {

    const TechStacksIcon = [
        {icon: "./HtmlIcon.svg"},
        {icon: "./cssIcon.svg"},
        { icon: "./javascriptIcon.svg" },
        {icon: "./typescriptIcon.png"},
        {icon: "./ReactIcon.svg"},
        {icon: "./TailwindIcon.svg"},
        {icon: "./GitIcon.svg"},
        {icon: "./firerbaseIcon.png"},
        {icon: "./githubIcon.svg"},
        {icon: "./vscodeIcon.svg"},
        {icon: "./expoIcon.png"},
        {icon: "./androidStudioIcon.png"},
        {icon: "./xcodeIcon.png"},
    ]

    return (
        <section className="w-full my-40">
            <div className="mx-auto w-[80%] gap-15 flex flex-col">
                <div className="flex flex-col items-center">
                    <p className="text-3xl text-[#D3D3D3] font-bold">My Tech Stack</p>
                    <p className="text-[#A7A7A7]">Technologies I’ve been working with recently</p>
                </div>
                <div className="grid grid-cols-7 gap-7 w-[90%] mx-auto">
                    {TechStacksIcon.map((items, index) => {
                        return (
                            <div
                                key={index}
                            >
                                <img className="px-4" src={items.icon} alt="TechStackIcons" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default TechStack;