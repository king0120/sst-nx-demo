import styles from './index.module.css';
import {ExampleComponent} from '@sst-nx-demo/sst-demo-library'
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <ExampleComponent />
    </div>
  );
}

export default Index;
