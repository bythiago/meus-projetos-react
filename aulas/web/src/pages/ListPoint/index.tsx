import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Point {
    id: number,
    name: string,
    email: string,
    whatsapp: string,
    uf: string,
    city: string,
    latitude: number,
    longitude: number,
    image: string
}

const ListPoint = () => {

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        api.get('points').then(response => {
            setPoints(response.data);
        });
    }, []);

    return (
        <div id="page-create-point">
            <header>
                <Link to="/">
                    <img src={logo} alt="Ecoleta"/>
                </Link>
    
                <Link to="/">
                    <FiArrowLeft></FiArrowLeft>
                    Voltar para Home
                </Link>
            </header>

            <section className="list">
                <strong>{points.length} ponto(s) encontrados</strong>

                { points.map(point => (
                    <div className="points" key={point.id}>
                        <h3>{point.name}</h3>
                        <p>
                            <img src={point.image} alt=""/>
                        </p>
                        <p>{point.email}</p>
                        <p>{point.whatsapp}</p>
                        <p>{point.latitude}</p>
                        <p>{point.longitude}</p>
                        <p>{point.city}</p>
                        <p>{point.uf}</p>
                    </div>
                ))}

                

            </section>
        </div>
    );
};

export default ListPoint;