// import LeftSidebar from "@/components/LeftSidebar";
// import MobileNav from "@/components/MobileNav";
// import RightSidebar from "@/components/RightSidebar";
// import Image from "next/image";

import LeftSidebar from "@/components/LeftSidebar";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="relative flex flex-col">
//       <main className="relative flex bg-black-3">
//         <LeftSidebar />
//         <section className="border-2 border-orange-1 min-h-screen flex flex-1 flex-col px-4 sm:px-14">
//           <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
//             <div className="flex h-16 items-center justify-between md:hidden">
//               <Image src="/logo.svg" width={30} height={30} alt="menu icon" />
//               <MobileNav />
//             </div>

//             <div className="flex flex-col md:pb-14">
//               Toaster (notification popup)
//               {children}
//             </div>
//           </div>
//         </section>
//         <RightSidebar />
//       </main>
//     </div>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSidebar />
        {children}
        <p className="text-white-1">right</p>
      </main>
    </div>
  );
}
