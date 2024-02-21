"use client";
import Link from "next/link";
import styles from "./sidebar.module.css";
import Image from 'next/image';

function SideBar() {
  return (
    <>
      <div className={styles.container}>

      <Link href="/">
        <div className={styles.sidebarbtn}>
          <div className={styles.sidebarbtnwrapper}>
            <span>Home</span>
          </div>
        </div>
      </Link>
      <Link href="/Page02">
        <div className={styles.sidebarbtn}>
          <div className={styles.sidebarbtnwrapper}>
            <span>Page 02</span>
          </div>
        </div>
      </Link>
      </div>

    </>
  );
}

export default SideBar;
