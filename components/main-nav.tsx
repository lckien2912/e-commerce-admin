"use client";

import { usePathname, useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavProps {
  className?: string;
  onOpenChange?: () => void;
}

const MainNav: React.FC<MainNavProps> = ({ className, onOpenChange }) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/cases`,
      label: "Cases",
      active: pathname === `/${params.storeId}/cases`,
    },
    {
      href: `/${params.storeId}/plates`,
      label: "Plates",
      active: pathname === `/${params.storeId}/plates`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn(
        "hidden lg:flex items-center space-x-4 xl:space-x-6",
        className
      )}
    >
      {routes.map(({ href, label, active }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-md font-medium transition-colors hover:text-primary",
            active
              ? "text-black dark:text-white font-semibold"
              : " text-muted-foreground"
          )}
          onClick={onOpenChange}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
