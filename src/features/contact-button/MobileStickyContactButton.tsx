"use client";

import { useEffect, useState } from "react";
import PrimaryButtonLink from "./ContactButton";

export default function MobileStickyContactButton() {
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);

    useEffect(() => {
        const contactFormID = document.getElementById("Contact");
        if (!contactFormID) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsContactFormVisible(!entry.isIntersecting),
            { threshold: 0.3 },
        );

        observer.observe(contactFormID);

        return () => {
            observer.disconnect();
        };
    }, []);

    if (!isContactFormVisible) return null;

    return (
        <div className="fixed bottom-0 z-[99] flex w-full items-center bg-brandoverlay p-9 backdrop-blur-sm sm:hidden">
            <PrimaryButtonLink />
        </div>
    );
}
