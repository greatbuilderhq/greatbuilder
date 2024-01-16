import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"
import TeamSwitcher from "./components/team-switcher"
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Builder",
    href: "/dashboard",
  },
  {
    title: "History",
    href: "/dashboard/history",
  },
  {
    title: "Marketplace",
    href: "/dashboard/marketplace",
  },
  {
    title: "Credentials",
    href: "/dashboard/credentials",
  },
  {
    title: "Variables",
    href: "/dashboard/journey",
  },
  {
    title: "Api Keys",
    href: "/dashboard/journey",
  },
  {
    title: "Journey",
    href: "/dashboard/journey",
  },
  {
    title: "Wiki",
    href: "/dashboard/journey",
  },
  {
    title: "Help",
    href: "/dashboard/journey",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <h1>Not available in mobile mode, coming soon..</h1>
        <h3>View In Desktop Mode</h3>
      </div>
      <div className="hidden space-y-6 pl-10 pt-2 pb-16 md:block">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-6xl">{children}</div>
        </div>
      </div>
    </>
  )
}
