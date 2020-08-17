import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

// Esse TextareaHTMLAttributes permite que minha propriedade TextareaProps possa receber todas as propriedades
// ja existens do html
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;