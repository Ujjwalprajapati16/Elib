"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { IconDashboard, IconBook, IconPlus, IconChartBar, IconShoppingCart } from "@tabler/icons-react";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<{ name: string; email: string } | null>(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const navMain = [
    { title: "Dashboard", url: "/dashboard", icon: IconDashboard },
    { title: "My Books", url: "/dashboard/books", icon: IconBook },
    { title: "Add Book", url: "/dashboard/add-book", icon: IconPlus },
    { title: "Analytics", url: "/dashboard/analytics", icon: IconChartBar },
    { title: "Orders", url: "/dashboard/orders", icon: IconShoppingCart },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={100} height={40} />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>

      {user && (
        <SidebarFooter>
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              avatar: "https://github.com/shadcn.png", // TODO: replace with real avatar
            }}
          />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
