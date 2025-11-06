export default function formatDateAndTime(moment: string): string {
    const timeZone = "UTC";

    return (
        new Date(moment).toLocaleString("en-US", {
            timeZone: timeZone,
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }) + ` ${timeZone}`
    );
}
