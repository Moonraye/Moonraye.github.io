import { useState } from "react";
import TelegramLogo from "/telegram.png"
import LinkedInLogo from "/linkedin.png"
import GitHubLogo from "/github.png"
export default function Contacts() {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Get in touch with me</h2>
            <p className="text-center text-lg mb-6">I am always open to new opportunities and interesting projects.</p>
            <div className="flex flex-col m-auto max-w-2xl gap-3">
                <div className="flex items-center gap-3 m-auto text-slate-400">
                    <p className="underline decoration-solid cursor-pointer text-black hover:text-slate-500 active:text-emerald-700 
                dark:text-white dark:hover:text-slate-500 dark:active:text-emerald-300">olegzavedia0@gmail.com</p>
                </div>
                <div className="p-5 mt-0 rounded-tl-lg shadow-md text-xl
                items-center flex justify-evenly lg:col-start-1 lg:row-start-2">
                    <a href="https://github.com/Moonraye" target="_blank" rel="noopener noreferrer">
                        <img className = "max-w-[50px] rounded-full border-4 border-slate-300 hover:border-blue-700 hover:duration-400 hover:transition shadow-md" src={GitHubLogo}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D1%96%D1%8F-90230a30b/" target="_blank" rel="noopener noreferrer">
                        <img className = "max-w-[50px] rounded-full border-4 border-slate-300 hover:border-blue-700 hover:duration-400 hover:transition shadow-md" src={LinkedInLogo}></img>
                    </a>
                    <a href="https://t.me/aleeeeeeeh" target="_blank" rel="noopener noreferrer">
                        <img className = "max-w-[50px] rounded-full border-4 border-slate-300 hover:border-blue-700 hover:duration-400 hover:transition shadow-md" src={TelegramLogo}></img>
                    </a>
                </div>
            </div>
        </section>
    )
}