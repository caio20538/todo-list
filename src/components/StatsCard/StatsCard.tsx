import React from "react";
import Style  from "./styles.module.scss";

interface StatsCardProps{
    title: string;
    number: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({title, number}) =>{
    return(
        <article className={Style.statsCard}>
            <h2>{title}</h2>
            <span>{number}</span>
        </article>
    );
}