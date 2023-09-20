import { A, Route, Routes } from '@solidjs/router';
import styles from '@/App.module.scss';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';

export const App = () => (
  <div class={styles.App}>
    <Navbar>
      <A href="/" end>
        Home
      </A>
      <A href="/events" end>
        Events
      </A>
    </Navbar>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/events" component={Home} /> {/*TODO: Replace Home with Events Page */}
      <Route path="*" component={Home} />
    </Routes>
  </div>
);
