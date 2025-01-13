"use client";

import { useBeyondViewport } from "../hooks/useBeyondViewport";
import Logo from "./Logo";
import MenuMain from "./MenuMain";

export interface HeaderData {
     menuItems: {
          id: string;
          label: string;
          link: string;
     }[];
     button: {
          label: string;
          link: string;
     };
     brand: {
          logo: string;
          link: string;
     };
}

interface HeaderRenderProps {
     data: HeaderData;
}

export default function HeaderRender({ data }: HeaderRenderProps) {
     const { isBeyondViewport } = useBeyondViewport();

     if (!data) {
          return <div>Loading...</div>;
     }

     return (
          <header>
               <div
                    className={`flex justify-center w-full fixed top-0 left-0 z-[99] ${
                         isBeyondViewport &&
                         "bg-black bg-opacity-30 backdrop-blur-sm"
                    }`}
               >
                    <div className="flex justify-between items-center h-20 w-10/12 max-w-[1920px] relative">
                         <Logo data={data.brand} />
                         <MenuMain
                              items={data.menuItems}
                              button={data.button}
                         />
                    </div>
               </div>
          </header>
     );
}
