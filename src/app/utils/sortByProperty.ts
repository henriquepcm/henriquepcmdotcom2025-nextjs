export default function sortByKey<T>(array: T[], property: keyof T) {
    return [...array].sort((a, b) => {
        const valueA = a[property];
        const valueB = b[property];

        if (typeof valueA === "number" && typeof valueB === "number") {
            return valueA - valueB;
        }

        return String(valueA).localeCompare(String(valueB));
    });
}
