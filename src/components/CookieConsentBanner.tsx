"use client";

import { useEffect, useState } from "react";
import CookieIcon from "./icons/CookieIcon";
import loadGoogleAnalytics from "@/lib/getGoogleAnalytics";
import CookieBiteIcon from "./icons/CookieBiteIcon";

type CookieConsentDecision = "accepted" | "declined";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [cookieIcon, setCookieIcon] = useState(<CookieIcon />);
  const [bannerClasses, setBannerClasses] = useState("opacity-100");

  function handleCookieConsent(decision: CookieConsentDecision) {
    localStorage.setItem("cookieConsent", decision);

    if (decision === "accepted") {
      loadGoogleAnalytics();
      setCookieIcon(<CookieBiteIcon />); // change the non-bite cookie to the bite one
      // hide the banner
    }
    setBannerClasses("opacity-0");
    setTimeout(() => setShowBanner(false), 1000); // 1 second before closing so user can see the icon switching
  }

  useEffect(() => {
    const storedDecision = localStorage.getItem("cookieConsent");
    if (!storedDecision) {
      setShowBanner(true);
    }
    if (storedDecision === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={`${bannerClasses} fixed bottom-10 m-6 w-[90vw] transform duration-1000 sm:w-[66vw] md:w-[50vw] lg:w-[40vw] xl:w-[33vw] 2xl:w-[25vw]`}
    >
      <div className="flex flex-col items-center rounded-lg bg-brandoverlay p-10 text-brandtextprimary backdrop-blur-sm">
        <div className="flex gap-5">
          <div className="flex h-10 w-10 text-brandtextprimary">
            {cookieIcon}
          </div>
          <div className="gap- mt-5 flex w-full flex-col">
            <div>
              I use cookies to improve your experience and analyze site traffic.{" "}
              <span className="text-nowrap font-bold">
                Do you accept cookies?
              </span>
            </div>
            <div className="mt-5 flex gap-5">
              <button
                onClick={() => handleCookieConsent("declined")}
                className="flex h-10 w-28 transform items-center justify-center rounded-md border border-brandborder text-[0.6rem] uppercase tracking-[0.15rem] text-brandtextprimary duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-brandshadow"
              >
                Decline
              </button>
              <button
                onClick={() => handleCookieConsent("accepted")}
                className="brand-btn flex h-10 w-28 items-center justify-center text-[0.6rem]"
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
