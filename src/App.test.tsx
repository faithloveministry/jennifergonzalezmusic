import { Router } from '@solidjs/router';
import { render, screen } from '@solidjs/testing-library';
import { App } from '@/App';

describe('app', () => {
  it('renders Home component with bio', () => {
    render(() => (
      <Router>
        <App />
      </Router>
    ));
    expect(screen.getByText(/Bio/)).toBeInTheDocument();
  });
});
