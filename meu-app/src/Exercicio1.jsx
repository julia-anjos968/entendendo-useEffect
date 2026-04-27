import { useState, useEffect } from 'react';
import styles from './Exercicio1.module.css';

export function Exercicio1() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        alert('Sistema de contagem iniciado');
    }, []);

    useEffect(() => {
        document.title = `Contagem: ${contador}`;
    }, [contador]);

    return (
        <div className={styles.container}>
            <h2>Contador de Cliques</h2>
            <p className={styles.valor}>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}