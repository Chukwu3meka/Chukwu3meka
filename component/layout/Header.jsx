import Link from "next/link";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { styles } from ".";

const Header = () => {
  const router = useRouter();

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    // { label: "Projects", link: "/projects" },
  ];

  const [currentPage, setCurrentPage] = useState("/");

  const handleRouteChange = (url) => {
    setCurrentPage(url);
  };

  useEffect(() => {
    handleRouteChange(window.location.pathname);
    return () => {
      handleRouteChange(window.location.pathname);
    };
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <header>
      <Box textAlign="center" display="flex" justifyContent="space-evenly" maxWidth={500} m="auto">
        {navLinks.map(({ label, link }) => (
          <Link href={link} key={link}>
            <a className={currentPage === link ? styles.currentPage : null}>{label}</a>
          </Link>
        ))}
      </Box>
    </header>
  );
};

export default Header;
