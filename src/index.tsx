/* @refresh reload */

import { render } from 'solid-js/web';
import { App } from '@/App';

render(() => <App />, document.querySelector('body')!);

// Extend JSX for Solid
declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      iframe: IframeHTMLAttributes<HTMLIFrameElement> & { frameborder?: string };
      img: ImgHTMLAttributes<HTMLImageElement> & { 'prop:src'?: string | undefined };
      input: InputHTMLAttributes<HTMLInputElement> & { 'prop:indeterminate'?: boolean };
    }
  }
}
