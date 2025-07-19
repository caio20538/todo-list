import { FormEvent, useRef } from "react";

export const Refs:React.FC = () =>{
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);


    function handleOnSubmit(event: FormEvent){
        event.preventDefault();// evita q a pagina seja recarregada
        //no controll input
        //aqui msm que mude o valor n remonta o componente
        //Melhor para formulários grandes tipo 20 campos
    }

    // useEffect(() =>{
    //     console.log(inputRef);
    // }, [inputRef]);
    return(
        <form style={{padding: "2rem"}} onSubmit={handleOnSubmit}>
            <h1>useRef</h1>

            <br />
            <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
            <input type="email" placeholder="Email" ref={inputEmailRef} />
            <input type="password" placeholder="senha" ref={inputPasswordRef} />
            
            <br />
            <button type="submit">Enviar</button>

        </form>
    );
}