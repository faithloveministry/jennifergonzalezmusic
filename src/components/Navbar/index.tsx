import { createSignal } from 'solid-js';
import styles from '@/components/Navbar/Navbar.module.scss';

export const Navbar = () => {
  const [hideMenu, setHideMenu] = createSignal(true);

  return (
    <div class={`${styles.Navbar} ${hideMenu() ? styles.hidden : ''}`}>
      <div class={styles.links}>
        <a href="#top" class={styles.brand} aria-label="Return to Top">
          Jennifer Gonzalez
        </a>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre Mi</a>
        <a href="#trayectoria-musical">Trayectoria Musical</a>
        <a href="#bio">Biografía</a>
      </div>
      <button onClick={() => setHideMenu(p => !p)}>^</button>
    </div>
  );
};
