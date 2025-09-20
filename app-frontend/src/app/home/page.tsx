import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { SideBar } from '@/components/sideBar/Sidebar';
import { ContentArea } from './components/contentArea/ContentArea';
import style from "./home.module.css";
export default function Home() {
  return (
    <>
      {/* ao clicar nos botoes da sidebar vai mudar os dados na direita da sideBar  */}
      <div className={style.div}>
        <SideBar />
        <ContentArea />
      </div>


    </>
  );
}