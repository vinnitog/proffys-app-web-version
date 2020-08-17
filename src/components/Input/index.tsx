import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// Esse InputHTMLAttributes permite que minha propriedade InputProps possa receber todas as propriedades
// ja existens do html
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;