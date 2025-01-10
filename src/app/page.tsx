"use client";

import fetchGraphQLData from "@/utilities/fetchGraphQLData";
import { useEffect, useState } from "react";

export default function App() {
     const isClient = typeof window !== "undefined";
     console.log(isClient ? "Client-side rendering" : "Server-side rendering");

     const [data, setData] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               const result = await fetchGraphQLData();
               setData(result);
          };

          fetchData();
     }, []);

     if (!data) {
          return <div>Loading...</div>;
     }

     return (
          <div>
               {data.header.menuItems.map((item) => {
                    return <div key={item.id}>{item.label}</div>;
               })}
          </div>
     );
}

{
     /* Grid to align elements */
     /*  
     <div className="grid-overlay">
          {[...Array(24)].map((_, i) => (
               <div key={i}></div>
          ))}
     </div> */
}
