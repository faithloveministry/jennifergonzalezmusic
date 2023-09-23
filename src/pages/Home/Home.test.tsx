import { render, screen } from '@solidjs/testing-library';
import { App } from '@/App';

describe('home', () => {
  it('renders first card', () => {
    render(() => <App />);
    expect(screen.getByText(/Te Invitamos a Conocernos/)).toBeInTheDocument();
  });
});
