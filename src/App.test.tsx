import { render, screen } from '@solidjs/testing-library';
import { App } from '@/App';

describe('app', () => {
  it('renders Home content', () => {
    render(() => <App />);
    expect(screen.getByText(/Te Invitamos a Conocernos/)).toBeInTheDocument();
  });
});
