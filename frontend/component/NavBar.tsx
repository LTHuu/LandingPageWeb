'use client'
import Image from 'next/image'
import Logo from '../img/logo.svg'
import "../style/NavBar.css"

export default function NavBar(){
    const menuItem = [
        {name: "Home", section:"home"},
        {name: "Features",section:"feature"},
        {name: "Problem", section:"problem"},
        {name: "FAQ",section:"faq"},
        {name: "Contact",section:"contact"}
    ];

    const scrollToSection = (id: string) => {
        const navbarHeight = 80;

        const element = document.getElementById(id);

        if (element) {
            const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

            window.scrollTo({
            top: y,
            behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <div className="topPage w-full bg-emerald-500">
                <p className="topBarText">Hơn 10 nghìn người sử dụng và đánh giá cao sản phẩm!</p>
            </div>
            <div className='navBar w-full h-10 flex justify-center items-center'>
                <div className='navBarContent h-10 border-red-800 border bg-cyan-200 rounded-full flex items-center'>
                    <button className='Logo'>
                        <div className='cover-logo flex items-center'>
                            <Image className='appLogo' src={Logo} alt="" width={30} height={30}/>
                            <p className='appName ml-2'>HealWatch</p>
                        </div>
                    </button>
                    <nav className='navItem justify-center'>
                        {menuItem.map((item)=>(
                            <button className='nav-top-item' key={item.name} onClick={() => scrollToSection(item.section)}>{item.name}</button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
        
    );
}