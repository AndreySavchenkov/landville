import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Our Services", href: "/" },
  { name: "LandSupplier", href: "/land-supplier" },
  { name: "LandVille", href: "/land-ville" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {routes.map((route, index) => {
        const isActive = pathname === route.href;

        return (
          <Link
            className={classNames(styles.navigation_link, {
              [styles.navigation_link_active]: isActive,
            })}
            href={route.href}
            key={index}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
