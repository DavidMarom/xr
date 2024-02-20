"use client";
import Link from "next/link";
import styles from "./sidebar.module.css";
import Image from 'next/image';

function SideBar() {
  return (
    <>
      <div className={styles.container}>
        <p>Brand Book</p>
      </div>
    </>
  );
}

export default SideBar;
