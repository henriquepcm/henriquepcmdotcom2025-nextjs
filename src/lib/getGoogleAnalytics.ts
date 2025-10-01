export default function loadGoogleAnalytics() {
  if (typeof window === "undefined") return; // run in the client only
  if (document.getElementById("google-analytics")) return; // avoid duplicates
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    console.error("Google Analytics ID is not defined in .env.local");
  }

  const script = document.createElement("script");
  script.id = "google-analytics";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
}
