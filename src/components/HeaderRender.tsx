"use client";

import { Data } from "@/types/headerTypes";
import { useBeyondViewport } from "../hooks/useBeyondViewport";
import Logo from "./Logo";
import MenuMain from "./MenuMain";
import MenuMobile from "./MenuMobile";
import BlogLogo from "../features/blog/components/Blog/BlogLogo";
import { usePathname } from "next/navigation";

export default function HeaderRender({ data }: { data: Data }) {
  const { isBeyondViewport } = useBeyondViewport();

  const unsortedMenuItemList = data.pages.nodes;

  const sortedMenuItemList = unsortedMenuItemList.sort(
    (a, b) => a.menuOrder - b.menuOrder,
  );
  const svgString = data.page.header.logo;

  const buttonData = {
    label: data.page.header.buttonLabel,
    link: data.page.header.buttonLink,
  };

  //—————— Blog Config —————————————————————
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <header>
      <div
        className={`fixed left-0 top-0 z-[99] flex w-full justify-center ${
          isBeyondViewport && "bg-brandoverlay backdrop-blur-sm"
        }`}
      >
        <div className="relative flex h-20 w-10/12 max-w-[1600px] items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo svgString={svgString} />
            {isBlog && <BlogLogo />}
          </div>
          <MenuMain items={sortedMenuItemList} button={buttonData} />
          <MenuMobile items={sortedMenuItemList} button={buttonData} />
        </div>
      </div>
    </header>
  );
}
