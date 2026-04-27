import { useState, useEffect } from 'react';
import styles from './Exercicio3.module.css';

export function Exercicio3() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        if (segundos === 10) {
            alert('Tempo limite atingido!');
            setSegundos(0);
        }
    }, [segundos]);

    return (
        <div className={styles.container}>
            <h2>Cronômetro Manual</h2>
            <div className={styles.display}>
                <span>{segundos}s</span>
            </div>
            <button className={styles.btnAvançar} onClick={() => setSegundos((prev) => prev + 1)}>
                Avançar 1s
            </button>
        </div>
    );
}