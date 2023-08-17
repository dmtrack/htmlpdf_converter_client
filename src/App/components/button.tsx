import React, { MouseEventHandler } from 'react';

interface Props {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: string;
    size?: string;
    disabled?: boolean;
    type?: 'submit' | 'button' | 'reset' | undefined;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    variant = 'default',
    size = 'md',
    disabled,
    type = 'submit',
    ...rest
}) => {
    return (
        <button
            className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...rest}>
            {children}
        </button>
    );
};

export default Button;
