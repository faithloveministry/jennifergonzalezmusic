import { render } from 'solid-js/web';
import { App } from '@/App';

render(() => <App />, document.body);

// Extend JSX for Solid
declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      div: HTMLAttributes<HTMLDivElement> & { 'prop:scrollLeft'?: number | undefined };
      img: ImgHTMLAttributes<HTMLImageElement> & { 'prop:src'?: string | undefined };
      input: InputHTMLAttributes<HTMLInputElement> & {
        'prop:src'?: string | undefined;
        'prop:indeterminate'?: boolean;
      };
    }
  }
}
