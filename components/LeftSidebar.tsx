// "use client";

// import { sidebarLinks } from "@/app/constants";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// const LeftSidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <section className="left-sidebar">
//       <nav className="flex flex-col gap-6">
//         <Link
//           href="/"
//           className="flex gap-2 items-center pb-10 max-lg:justify-center"
//         >
//           <Image src="/logo.svg" width={35} height={40} alt="logo" />
//           <h1 className="text-24 text-white-1 font-extrabold ">PodNova</h1>
//         </Link>

//         {sidebarLinks.map((item, index) => {
//           const isActive =
//             pathname.startsWith(`${item.route}/`) || item.route === pathname;
//           return (
//             <Link
//               href={item.route}
//               key={index}
//               className={cn("flex gap-3 items-center py-4 max-lg:px-4", {
//                 "bg-nav-focus border-r-4 border-orange-1": isActive,
//               })}
//             >
//               <Image
//                 src={item.imgURL}
//                 width={24}
//                 height={24}
//                 alt={item.label}
//               />
//               <p>{item.label}</p>
//             </Link>
//           );
//         })}
//       </nav>
//     </section>
//   );
// };

// export default LeftSidebar;
"use client";

import { sidebarLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const route = useRouter();

  return (
    <section className="left-sidebar ">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex gap-2 pb-10 max-lg:justify-center">
          <Image src="/logo.svg" width={35} height={40} alt="로고" />
          <h1 className="text-white-1 text-24 font-extrabold">PodNova</h1>
        </Link>

        {sidebarLinks.map((link, index) => {
          const isActive =
            pathname.startsWith(`${link.route}/`) || pathname === link.route;
          return (
            <Link
              href={link.route}
              key={index}
              className={cn("flex gap-3 items-center py-4 max-lg:px-4 ", {
                "bg-nav-focus border-r-orange-500 border-r-2 h-full": isActive,
              })}
              // className="flex gap-3 items-center py-4 max-lg:px-4 "
            >
              <Image
                src={link.imgURL}
                width={24}
                height={24}
                alt={link.label}
                className="inline-block"
              />
              <p>{link.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
