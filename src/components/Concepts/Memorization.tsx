import React, { useCallback, useMemo, useState } from "react";

interface MemorizationProps{
    financialDate:{
        income: number[],
        outcomes: number[]
    }
}

export const Memorization: React.FC<MemorizationProps> = ({financialDate}) => {
    // Estado que define se os valores devem ser mostrados ou não
    const [showValues, setShowValues] = useState(true)

    //se os valores continuam o mesmo ele n recalcula na montagem salva a execução
    const totalIcomes = useMemo(() => {
        return financialDate.income.reduce((total, income) =>{
                    return (total += income);
                }, 0);
    }, [financialDate.income]);

    const totalOutcomes = useMemo(() => {
        return financialDate.outcomes.reduce((total, outcome) => {
                    return total += outcome;
                },0);
    }, [financialDate.outcomes]);

    //useCallBack

    //se a dependencia, totalIncomes, mudar ele refaz essa função
    const aplicarDesconto = useCallback((desconto:number) => {
        return (totalIcomes * ( 1 - desconto));
    }, [totalIcomes]);

    return(
        <div style={{padding: "2rem"}}>
            <h1>Memorization</h1>

            <h2>useMemo</h2>

            <p>{`Total de receitas: R$ ${showValues ? totalIcomes : 'xxxx'}`}</p>
            <br />
            <p>{`Total de despesas: R$ ${showValues ? totalOutcomes: 'xxxx'}`}</p>
            <br />
            <p>{`Total de despesas: R$ ${showValues ? aplicarDesconto(4): 'xxxx'}`}</p>

            <br /><br />
            

            <button onClick={() => setShowValues(!showValues)}>
                {showValues ? "Ocultar valores" : "Mostrar Valores"}
            </button>

        </div>
    );
}