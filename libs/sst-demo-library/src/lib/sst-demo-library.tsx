import './sst-demo-library.module.css';

/* eslint-disable-next-line */
export interface SstDemoLibraryProps {}

export function ExampleComponent(props: SstDemoLibraryProps) {
  return (
    <div>
      <h1>hello world from library!</h1>
    </div>
  );
}

