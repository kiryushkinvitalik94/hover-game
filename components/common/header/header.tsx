import React from "react";
import Link from "next/link";
import classes from "./header.module.css";

const Header: React.FC<{}> = (): JSX.Element => {
  return (
    <header>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/modes">
              <a>Modes</a>
            </Link>
          </li>
          <li>
            <Link href="/game">
              <a>Game</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
