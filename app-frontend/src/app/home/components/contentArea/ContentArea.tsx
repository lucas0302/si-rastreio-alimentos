
import { Administration } from '../administration/Administration';
import { DashBord } from '../dashBord/DashBord';
import styles from './contentArea.module.css';

export function ContentArea() {

  return (
    // aqui e para fazer a logica de celecionar qual dado vai mostra a escolher na sideBar
    <>
      <DashBord />
      <br />
      <Administration />

    </>
  );
}