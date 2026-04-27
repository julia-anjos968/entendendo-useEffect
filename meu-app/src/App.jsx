import { useEffect, useState } from 'react';
import './App.module.css';

function App() {
    const [likes, setLikes] = useState(0);
    const [input, setInput] = useState('Nada');

    function darOLike() {
        setLikes((prevLikes) => prevLikes + 1);
    }

    /*

    useEffect / Efeito Colateral
        - Ele vai ser chamado quando ...

            1) Qualquer estado for alterado
            2) Quando UM estado determinado for alterado
            3) Quando a tela carregar

*/  useEffect(() => {
        console.log("Oi, mudou alguma coisa")
})
    useEffect(() => {
        alert("Olá, seja bem-vindo(a) ao site")
    }, [])

    useEffect(() => {
         if(likes > 9)
         alert(`Parabéns, você recebeu ${likes} likes`);
     }, [likes]);

    return (
        <div>
            <p>Quantidade de Likes: {likes}</p>
            <button onClick={darOLike}>Like</button>

            <p>0 que você digitou no Input {input}</p>
            <input onChange={(event) => setInput(event.target.value)} />
        </div>
    );
}

export default App;