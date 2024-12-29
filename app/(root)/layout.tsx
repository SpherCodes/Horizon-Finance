'use client'; 
import Sidebar from '@/components/ui/Sidebar'
import React from 'react';
import Image from 'next/image';
import MobileNav from '@/components/ui/MobileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'Adrian', LastName:'JSM'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className='size-full flex-col'>
          <div className='root-layout'>
              <Image src="/icons/logo.svg" width={30} height={30} alt={'logo'}/>
              <div>
                <MobileNav user={loggedIn}/>
              </div>
          </div>
            {children}
      </div>
  </main>
  );
}
