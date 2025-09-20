'use client';

import Image from "next/image";
import Logo from "../../assets/logo.png";
import styles from './sideBar.module.css';
import { useState } from "react";

export function SideBar() {
  const [isRelatorioOpen, setIsRelatorioOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className={styles.logo}
            />
          </div>
          <span className={styles.logoText}>LF SOLUCION</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className={styles.menuSection}>
        <nav className={styles.menuNav}>
          {/* Dashboard */}
          <button className={`${styles.menuItem} ${styles.dashboardItem}`}>
            Dashboard
          </button>

          {/* Relatório Dropdown */}
          <div className={styles.dropdownContainer}>
            <button
              onClick={() => setIsRelatorioOpen(!isRelatorioOpen)}
              className={`${styles.menuItem} ${styles.dropdownTrigger}`}
            >
              <span>Relatório</span>
              <span className={`${styles.dropdownArrow} ${isRelatorioOpen ? styles.open : ''}`}>
                &#9662;
              </span>
            </button>
          </div>

          {/* Controle de expedição */}
          <button className={styles.menuItem}>
            Controle de expedição
          </button>

          {/* Administração */}
          <button className={styles.menuItem}>
            Administração
          </button>

          {/* Configurações */}
          <button className={styles.menuItem}>
            Configurações
          </button>
        </nav>
      </div>

      {/* User Section */}
      <div className={styles.userSection}>
        {/* User Info */}
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            👤
          </div>
          <span className={styles.userName}>Luis Fernando</span>
        </div>

        {/* Logout */}
        <button className={styles.logoutButton}>
          <span className={styles.logoutIcon}>⇥</span>
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}