"use client"
import {
  CircleUser,
  Menu,
  Package2} from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

import { Dashboard } from "@/components/dashboard"
import { Orders } from "@/components/orders"
import { PageNotFound } from "@/components/404"

export default function IndexPage() {
  const tabs = ['Dashboard', 'Orders', 'Products', 'Customers', 'Analytics'] as const;
  type Tab = typeof tabs[number];
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {tabs.map((tab) => (
              <Link
                key={tab}
                href="#"
                className={`${tab === selectedTab
                  ? 'text-foreground transition-colors hover:text-foreground'
                  : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </Link>
            ))}
        </nav>
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
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              {tabs.map((tab) => (
                <Link
                  key={tab}
                  href="#"
                  className={`${
                    tab === selectedTab
                      ? 'text-foreground transition-colors hover:text-foreground'
                      : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
          </form>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {
          selectedTab === "Dashboard" ? (
            <Dashboard navigateToOrders={() => setSelectedTab("Orders")}/>
          ) : selectedTab === "Orders" ? (
            <Orders/>
          ): (
            <PageNotFound navigateTo={setSelectedTab as any} />
          )
        }
      </main>
    </div>
  )
}
