import { useRef, useState } from "react";

export function useSpamGuard() {
    const [companyInput, setCompanyInput] = useState("");
    const timeLoaded = useRef(Date.now());

    function isBot() {
        const timeNow = Date.now();

        if (companyInput !== "") return true;
        if (timeNow - timeLoaded.current < 5000) return true;

        return false;
    }

    return { companyInput, setCompanyInput, isBot };
}
