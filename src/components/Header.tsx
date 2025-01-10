import { useBeyondViewport } from "../hooks/useBeyondViewport";
import Logo from "./Logo";
import MenuMain from "./MenuMain";
import MenuMobile from "./MenuMobile";
import { gql, useQuery } from "@apollo/client";

interface HeaderData {
     header: {
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
     };
}

export default function Header() {
     const { isBeyondViewport } = useBeyondViewport();

     return (
          <header>
               <div
                    className={`flex justify-center w-full fixed top-0 left-0 z-[99] ${
                         isBeyondViewport &&
                         "bg-black bg-opacity-30 backdrop-blur-sm"
                    }`}
               >
                    <div className="flex justify-between items-center h-20 w-10/12 max-w-[1920px] relative">
                         {loading && (
                              <>
                                   <Logo loading={loading} />
                                   <MenuMain loading={loading} />
                                   <MenuMobile loading={loading} />
                              </>
                         )}
                         {data && (
                              <>
                                   <Logo
                                        brand={data.header.brand}
                                        loading={loading}
                                   />
                                   <MenuMain
                                        items={data.header.menuItems}
                                        button={data.header.button}
                                        loading={loading}
                                   />
                                   <MenuMobile
                                        items={data.header.menuItems}
                                        button={data.header.button}
                                        loading={loading}
                                   />
                              </>
                         )}
                    </div>
               </div>
          </header>
     );
}
