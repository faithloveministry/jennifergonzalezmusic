import type { ParentProps } from 'solid-js';
import styles from '@/components/Navbar/Navbar.module.scss';

export const Navbar = (props: ParentProps) => (
  <>
    <style>{`.active{color:#2a1e36}.inactive{color:#443850;text-decoration:none}`}</style>
    <div class={styles.Navbar}>
      <div class={styles.brand} style={{ 'background-image': `url("icon192.png")` }} />
      {props.children}
    </div>
  </>
);
