import { useState, useEffect } from 'react';
import styles from './Exercicio2.module.css';

export function Exercicio2() {
    const [cupom, setCupom] = useState('');

    useEffect(() => {
        if (cupom === 'PROMO10') {
            alert('Cupom aplicado com sucesso!');
        }
    }, [cupom]);

    return (
        <div className={styles.container}>
            <h2>Cupom de Desconto</h2>
            <input
                type="text"
                placeholder="Digite seu cupom"
                value={cupom}
                onChange={(e) => setCupom(e.target.value)}
                className={styles.input}
            />
            <p>Dica: Tente 'PROMO10'</p>
        </div>
    );
}