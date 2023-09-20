import type { ParentProps } from 'solid-js';
import styles from '@/components/Navbar/Navbar.module.scss';

export const Navbar = (props: ParentProps) => (
  <>
    <style>{`.active{color:#2d0c28}.inactive{color:#42213d;text-decoration:none}`}</style>
    <div class={styles.Navbar}>{props.children}</div>
  </>
);
