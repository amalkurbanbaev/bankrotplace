import PhoneInput from 'react-phone-number-input';
import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
    max-width: 400px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    .error-message {
        color: #f18f93;
    }
`;

const commonInputStyles = css`
    color: #000;
    border: 0px solid #000;
    background-color: #fff;
    border-radius: 100px;
    font-size: 18px;
    font-weight: 400;
    height: 50px;
    padding: 8px 20px;

    width: 100%;

    :focus,
    :active {
        outline: 0;
    }
`;

export const StyledInput = styled.input`
    ${commonInputStyles}
`;

export const StyledPhoneInput = styled(PhoneInput)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    input.PhoneInputInput {
        ${commonInputStyles}
    }
    position: relative;
    & > .PhoneInputCountry {
        position: absolute;
        right: 20px;
        width: 20px;
        opacity: 0.85;

        .PhoneInputCountryIconImg {
            box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.3);
        }

        select {
            display: none;
        }
    }
`;

export const Disclaimer = styled.div`
    text-align: center;
    opacity: 0.7;

    p,
    button {
        color: ${({ theme }) => theme.palette.common.white};
        font-size: 12px;
        font-weight: 500;
        line-height: 0.9;
        background: transparent;

        display: inline-block;
        border-bottom: 1px dashed transparent;
    }

    button {
        border-bottom: 1px dashed rgba(255, 255, 255, 0.3);

        transition: color 0.2s ease-in-out;

        :hover {
            color: #00b0cc;
        }
    }
`;
