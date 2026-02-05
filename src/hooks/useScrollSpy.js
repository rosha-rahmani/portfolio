import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds , offset = 100 ) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;
            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll,{passive:true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);
    return activeSection;
}

// smoth scrool to section
export const scroolToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const top = section.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }
}