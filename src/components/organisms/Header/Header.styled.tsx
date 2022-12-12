import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    padding: 14px;
    background: transparent;

    .logo {
        width: 110px;
        height: 50px;
        float: left;
        margin-top: -6px;
    }

    p {
        margin-bottom: 0;
    }

    .buttons {
        img {
            max-width: 40px;
            max-height: 40px;

            transition: transform 0.2s ease-in-out;

            :hover {
                transform: scale(1.07);
            }
        }
    }

    z-index: 1;
    position: fixed;
    top: 0;

    &:after {
        content: '';
        background-image: ${({ theme }) => theme.palette.gradients.blueHeader};
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.8;
    }
`;

export const Divider = styled.div`
    border-left: 1px solid rgba(255, 255, 255, 0.7);
    height: 80%;
    margin: 0 20px;
    margin-top: 2px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 36px;
`;
export const NavItem = styled.a`
    color: ${({ theme }) => theme.palette.common.white};
    text-transform: uppercase;

    font-size: 12px;
    line-height: 1.55;
    font-weight: 500;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: #00b0cc;
        font-weight: 500;
    }
`;
