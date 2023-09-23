import styles from '@/components/Footer/Footer.module.scss';

export const Footer = () => (
  <div class={styles.Footer}>
    <span>
      <i>Designed by qeleb</i>
      <a href="https://github.com/qeleb">
        <svg width="1.6rem" viewBox="0 0 98 96">
          <path
            fill="#443850"
            d="M49 0C22 0 0 22 0 49 0 71 14 89 34 96c2.4.5 3-1.1 3-2.4 0-1.1-.1-5.1-.1-9.1-14 3-16-5.9-16.4-5.9-2.2-5.7-5.4-7.2-5.4-7.2-4.5-3.0.3-3.0.3-3.0 4.9.3 7.5 5 7.5 5 4.4 7.5 11 5.4 14.2 4.1.4-3.2 1.7-5.4 3.1-6.6-11-1.1-22-5.4-22.3-24.3 0-5.4 2-9.8 5-13.2-.5-1.2-2.2-6.3.5-13.0 0 0 4-1.3 13.4 5a47 47 0 0 1 12.2-1.6 47 47 0 0 1 12.2 1.6c9.3-6.4 13-5.1 13.4-5.1 2.7 6.8.97 11.8.5 13a19 19 0 0 1 5 13.2c0 19-11 23-22.3 24.3 1.8 1.6 3.3 4.5 3.3 9 0 6.6-.1 12-.1 13.5 0 1.3.9 2.9 3.3 2.4a49 49 0 0 0 33.4-47C98 22 76 0 49 0z"
          />
        </svg>
      </a>
    </span>
    <span>Jennifer Gonzalez Music — 2023</span>
  </div>
);
