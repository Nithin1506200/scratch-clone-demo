import Navbar from './components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScratchPage from './components/scratch/page/Scratch.page';
import './css/colors.scss';
import './css/border.scss';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.body}>
        <ScratchPage />
      </div>
      <ToastContainer position={'top-center'} />
    </div>
  );
}

export default App;
