import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLogIn } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { Map, TileLayer, Marker } from 'react-leaflet';

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

const contato = {
    mailto : 'mailto:',
    send: 'https://api.whatsapp.com/send?phone='
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
                <div>
                    <strong>{points.length} ponto(s) encontrados</strong>
                </div>
                { points.map(point => (
                    <div className="points" key={point.id}>
                        <h3>{point.name}</h3>
                        <p>
                            <img src={point.image} alt=""/>
                        </p>
                        <strong>Endereço</strong>
                        <p>{point.city}, {point.uf}</p>
                        <p>{point.whatsapp}</p>
                        <p>{point.email}</p>
                        
                        <div className="grid">
                            <div className="map col-12">
                                <Map center={[point.latitude, point.longitude]} zoom={20} scrollWheelZoom={false} >
                                    <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[point.latitude, point.longitude]}></Marker>
                                </Map>
                            </div>

                            <div className="col-6">
                                <a href={contato.mailto+point.email} className="btn-information">
                                    <span><FiLogIn/></span>
                                    <strong>E-mail</strong>
                                </a>
                            </div>

                            <div className="col-6">
                                <a href={contato.send+point.whatsapp} target="_blank" className="btn-information">
                                    <span><FiLogIn/></span>
                                    <strong>Whatsapp</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                

            </section>
        </div>
    );
};

export default ListPoint;