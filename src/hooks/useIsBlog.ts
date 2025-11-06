import { usePathname } from "next/navigation";

export default function useIsBlog() {
    const pathname = usePathname();
    return pathname.startsWith("/blog");
}
