import Link from "next/link";












const Footer = () => {

    
    const NavItems = [
        {name: "Home", link: "/"},
        {name: "About", link: "/"},
        {name: "Tech Stack", link: "/"},
        {name: "Projects", link: "/"},
        {name: "Contact", link: "/"},
    ]
    
        const SocialsIcon = [
            {socialIcon: "./github.svg", link: "/"},
            {socialIcon: "./twitter.svg", link: "/"},
            {socialIcon: "./linkdln.svg", link: "/"},
        ]

    return (
        <section className="w-full pb-20">
            <div className="w-[80%] mx-auto gap-15 flex flex-col">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl text-[#A7A7A7] font-semibold">NonsoLovesCoding</p>
                    </div>
                    <div className="flex items-center gap-15 text-[#A7A7A7]">
                        <p>+234 9163440787</p>
                        <p>timothyobi494@gmail.com</p>
                        <div className="flex items-center gap-3">
                            {SocialsIcon.map((items, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={items.link}>
                                        <img src={items.socialIcon} alt="" />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-[#A7A7A7]"></div>
                <div className="flex items-center justify-between">
                    <nav className="flex items-center gap-10 text-[#A7A7A7]">
                        {NavItems.map((items, index) => {
                            return (
                                <div key={index} className="">
                                    <Link  href={items.link}>{items.name}</Link>
                                </div>
                            )
                        })}
                    </nav>
                    <div>
                        <p className="text-[#A7A7A7]">Designed and built by NonsoLovesCoding with Love & Coffee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;