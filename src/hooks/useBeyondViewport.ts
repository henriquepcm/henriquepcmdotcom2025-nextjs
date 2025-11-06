"use client";
import { useEffect, useState } from "react";

export const useBeyondViewport = () => {
    const [innerHeight, setInnerHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isBeyondViewport, setIsBeyondViewport] = useState(false);
    const [margin, setMargin] = useState(0);

    useEffect(() => {
        setMargin(scrollPosition + scrollPosition * 0.1); // Margin of 10% to trigger isBeyondViewport before the actual point.
    }, [scrollPosition]);

    useEffect(() => {
        const handleResize = () => {
            setInnerHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        //cleanup on unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [innerHeight]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        //cleanup on unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        setIsBeyondViewport(margin > innerHeight);
    }, [margin, innerHeight]);

    return { isBeyondViewport };
};
