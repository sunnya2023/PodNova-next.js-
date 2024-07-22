// import LeftSidebar from "@/components/LeftSidebar";
// import MobileNav from "@/components/MobileNav";
// import RightSidebar from "@/components/RightSidebar";
// import Image from "next/image";

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

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
    <div className="w-full h-full">
      <main className=" flex justify-between ">
        <LeftSidebar />

        <section className="pt-8 px-8 border-red-500 border-2 w-full h-screen md:px-4">
          <Image
            src="/logo.svg"
            width={50}
            height={46}
            alt="로고"
            className="md:hidden"
          />
          <div className="text-white-1">{children}</div>
        </section>

        <RightSidebar />
      </main>
    </div>
  );
}
