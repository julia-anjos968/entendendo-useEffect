import { Exercicio1 } from './Exercicio1';
import { Exercicio2 } from './Exercicio2';
import { Exercicio3 } from './Exercicio3';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Exercicio1 />
            <hr />
            <Exercicio2 />
            <hr />
            <Exercicio3 />
        </div>
    );
}

export default App;