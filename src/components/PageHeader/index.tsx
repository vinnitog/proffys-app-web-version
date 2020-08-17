import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string; /*se eu nao quisesse que a propriedade title fosse obrigatoria bastava colocar o interrogacao antes dos dois pontos*/
    description?: string;
}

/*React.FC simboliza que eh um componente do tipo react function component*/
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Project 1"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;