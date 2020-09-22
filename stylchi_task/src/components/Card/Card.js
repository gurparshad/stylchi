import React from 'react'
import './Card.css';

export default function Card({ src, title, description }) {
    return (
        <div className="card">
            <img src={src} alt="image" />
            <div className="card__info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
