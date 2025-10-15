import Link from "next/link";









const Projects = () => {

    const ProjectsList = [
        {
            image: "./Homez.png",
            name: "Homez Estates",
            info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            projectLink: "https://homez-ivory.vercel.app/",
            githubLink: "https://github.com/NonsoCoding/Homez"
        },
        {
            image: "./anhelina.png",
            name: "Anhelina",
            info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            projectLink: "https://anhelina.vercel.app/",
            githubLink: "https://github.com/NonsoCoding/anhelina-front"
        },
        {
            image: "./capitalgadget.png",
            name: "CapitalGadgetz",
            info: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            projectLink: "https://capital-gadgetz.vercel.app/",
            githubLink: "https://github.com/NonsoCoding/CapitalGadgetz"
        },
    ]

    return (
        <section className="w-full pb-20">
            <div className="w-[80%] mx-auto flex flex-col gap-15">
                <div className="items-center flex flex-col">
                    <p className="text-3xl text-[#D3D3D3] font-bold">Projects</p>
                    <p className="text-[#A7A7A7]">Things I’ve built so far</p>
                </div>
                <div className="grid grid-cols-3 gap-10 w-full">
                    {ProjectsList.map((items, index) => {
                        return (
                             <div key={index} className="bg-[#363636] rounded-2xl overflow-hidden shadow-2xl">
                        <img className="overflow-hidden" src={items.image} alt="Homez" />
                        <div className="p-6 text-[#CCCCCC] flex flex-col gap-4">
                                    <p className="text-xl font-semibold">{items.name}</p>
                                    <p className="font-light">{items.info}</p>
                                    <p className="font-light"><span className="font-semibold">Tech stack :</span> {items.stack}</p>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <img src="./link.svg" alt="" />
                                <a className="border-b-2 hover:border-b-white hover:text-white" target="_blank" rel="noopener noreferrer" href={items.projectLink}>Live Preview</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src="./github.svg" alt="" />
                                    <a className="border-b-2 hover:border-b-white hover:text-white" target="_blank" rel="noopener noreferrer" href={items.githubLink}>View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                   
                </div>
            </div>
        </section>
    )
}

export default Projects;