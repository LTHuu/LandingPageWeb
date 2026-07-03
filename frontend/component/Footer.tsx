'use client'
import "../style/Footer.css";
import { useState } from "react";

export default function Footer() {

    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try{
            await navigator.clipboard.writeText(
                "support@healwatch.com"
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);

        } catch(error){
            console.error(error);
        }
    };

    return (
        <footer className="footer">

            <div className="footerContainer">
                <div className="footerSection">

                    <h2 className="footerLogo">
                        HealWatch
                    </h2>

                    <p className="footerText">
                        Smart health watch designed to monitor,
                        protect and keep your family connected anytime.
                    </p>

                </div>
                <div className="footerSection">

                    <h3 className="footerTitle">
                        Quick Links
                    </h3>

                    <ul className="footerLinks">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#feature">Features</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>

                </div>
                <div className="footerSection">

                    <h3 className="footerTitle">
                        Contact
                    </h3>
                    {copied && (
                        <span className="copiedMessage">
                            Copied!
                        </span> 
                    )}
                    <p title="click to copy" className="emailText cursor-pointer" onClick={copyEmail}>Email: support@healwatch.com</p>
                    <p>Phone: +84 123 456 789</p>
                    

                    <div className="socials">

                        <button>FB</button>
                        <button>IG</button>
                        <button>YT</button>

                    </div>

                </div>

            </div>

            <div className="footerBottom">
                © 2026 HealWatch. All rights reserved.
            </div>

        </footer>
    );
}