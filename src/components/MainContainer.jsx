import { useState, useEffect } from "react";
import DiceIcon from "../assets/images/icon-dice.svg";
import PatternMobile from "../assets/images/pattern-divider-mobile.svg";
import PatternDesktop from "../assets/images/pattern-divider-desktop.svg";

function MainContainer() {

    const [pattern, setPattern] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setPattern(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return (
        <main className="h-screen bg-veryDarkBlue flex flex-col justify-center items-center box-border p-4">
            <section className="bg-darkBlue max-w-[375px] lg:max-w-[535px] flex flex-col justify-center items-center text-center rounded-lg lg:rounded-2xl px-5 lg:px-10 py-14 gap-5 relative shadow-2xl lg:shadow-4xl">
                <div>
                    <h1 className="font-manrope font-medium tracking-widest text-green text-sm">ADVICE #117</h1>
                </div>
                <div >
                    <p className="font-manrope font-bold text-blue-quote text-quote lg:mb-3">"It is easy to sit up and take notice, whats difficult is getting up and taking action."</p>
                </div>
                <div>
                    {pattern < 768 ? (<img src={PatternMobile} alt="Divider" className="w-full"/>) : (<img src={PatternDesktop} alt="Divider" className="w-full"/>)}
                </div>
                <div className="flex justify-center">
                    <button className="bg-green p-5 rounded-full absolute bottom-0 translate-y-1/2 z-50 cursor-pointer hover:shadow-[0_0_20px_hsl(150,100%,66%)] transition-shadow ease-in">
                        <img src={DiceIcon} alt="DiceIcon" />
                    </button>
                </div>
            </section>
        </main>
    );
}
export default MainContainer;