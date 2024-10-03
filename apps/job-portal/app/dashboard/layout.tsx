import React, { ReactNode } from 'react';
import {Sidebar} from './components/Sidebar';
import Image from "next/image";
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Toaster } from '@/components/ui/sonner';
import { getSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Menu } from 'lucide-react';
import Logo from "@/public/job-logo.png";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {

    const session = await getSession();

//   if (!session?.user) {
//     return redirect("/");
//   }

    return (
        <>
          <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                  <p className="text-3xl font-semibold text-primary">
                      Dream
                      {/* <span className="text-primary">Job</span> */}
                    </p>
                    <Image src={Logo} alt="Logo" className="size-12" />
                   
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Sidebar />
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 mt-10">
                      <Sidebar />
                    </nav>
                  </SheetContent>
                </Sheet>
    
                <div className="ml-auto flex items-center gap-x-4">
                  {/* <ThemeToggle /> */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                      >
                        <Image
                          src={Logo}
                          alt="Profile"
                          width={20}
                          height={20}
                          className="w-full h-full rounded-full"
                        />
                        <span className="sr-only">Toggle user menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/settings">Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <form
                          className="w-full"
                          action={async () => {
                            "use server";
                            await signOut();
                          }}
                        >
                          <button className="w-full text-left">Log out</button>
                        </form>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>
              <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
              </main>
            </div>
          </div>
          <Toaster richColors closeButton />
        </>
      );
}