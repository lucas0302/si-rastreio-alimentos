
import { Administration } from './administration/Administration';
import { DashBoard } from './dashBoard/DashBoard';
import styles from './contentArea.module.css';

export function ContentArea() {

  return (
    // aqui e para fazer a logica de celecionar qual dado vai mostra a escolher na sideBar
    <>
      <DashBoard />
      <br />
      <Administration />

    </>
  );
}