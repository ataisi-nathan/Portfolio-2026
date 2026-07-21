import type React from "react";

type CardProps = {
    title: string;
    description: null | React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description}) => {
    return (
        <div className="card">
            <p>{title}</p>
            <h4 className="icon">{description}</h4>
        </div>
    )
}

export default Card;