import { useEffect, useState } from "react";

const ScrollTopProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = document.documentElement.scrollTop;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        console.log("scrollTop ==> ", scrollTop)
    }, [scrollTop])

    return (
        <div className="bg-transparent h-1 ssm:h-2 fixed top-[100px] ssm:top-[105px] left-0 z-50 w-full">
            <div
                className="h-1 ssm:h-2 bg-indigo-700 w-0 transition-all duration-300 ease-in-out"
                style={{ width: `${scrollTop}%` }}
            ></div>
        </div>
    )
}
export default ScrollTopProgressBar;