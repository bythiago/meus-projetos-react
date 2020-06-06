import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';


const ListPoint = () => {
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
        </div>
    );
};

export default ListPoint;