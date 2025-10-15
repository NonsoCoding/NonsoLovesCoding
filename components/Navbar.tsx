import { link } from "fs";
import Link from "next/link";



const Navbar = () => {

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
        <section className="py-1 shadow-xl w-full sticky inset-0 bg-[#191919]">
            <div className="flex justify-between items-center mx-auto w-[80%]">
                <img className="h-15" src="./MyLogo.png" alt="" />
                <div className="flex justify-between items-center gap-8">
                <nav className="flex gap-8">
                    {NavItems.map((items, index) => {
                        return (
                            <div key={index}>
                                <Link className="text-[#A7A7A7] border-b-1 hover:text-white hover:border-white " href={items.link}>{items.name}</Link>
                            </div>
                        )
                    })}
                </nav>
                <nav className="flex gap-3">
                    {SocialsIcon.map((items, index) => {
                        return (
                            <div key={index}>
                                <Link className="" href={items.link}>
                                    <img src={items.socialIcon} alt="" />
                                </Link>
                            </div>
                        )
                    })}
                </nav>
                </div>
            </div>
        </section>
    )
}

export default Navbar;