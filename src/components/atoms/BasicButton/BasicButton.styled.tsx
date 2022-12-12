import styled, { css } from 'styled-components';

import { BasicButtonProps } from './types';

const commonButtonStyles = css<BasicButtonProps>`
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.secondary};
    min-height: 40px;
    width: 100%;
    justify-content: center;

    padding: 10px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.buttons};

    text-align: center;
    white-space: pre-line;
    line-height: 1.2;
    font-size: 14px;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
        border-color 0.2s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #eb4a00;
    }
`;

const mediumButtonStyles = css`
    min-height: 50px;
`;
const smallButtonStyles = css`
    min-height: 40px;
`;

const submitButtonStyles = css`
    font-size: 18px;
    line-height: 1.55;
    font-weight: 600;
`;

export const StyledButton = styled.button<BasicButtonProps>`
    ${commonButtonStyles}

    ${(props) => (props.size === 'sm' ? smallButtonStyles : undefined)}
    ${(props) => (props.size === 'md' ? mediumButtonStyles : undefined)}

    ${(props) => (props.variant === 'submit' ? submitButtonStyles : undefined)}

    &:disabled {
        opacity: 0.5;
    }
`;

StyledButton.defaultProps = {
    size: 'md',
    variant: 'primary',
};
