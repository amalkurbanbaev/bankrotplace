import styled from 'styled-components';

export const SloganWrapper = styled.div`
    p {
        margin: 22px 0 30px;
    }
`;

export const HeadingSlogan = styled.h1`
    font-size: 48px;
    line-height: 1.15;
    font-weight: 700;
    text-transform: uppercase;
`;

export const PictureWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;

    img {
        position: absolute;
        top: 65px;

        width: 285px;
        height: 285px;

        opacity: 0.4;
    }
`;

export const PictureBadge = styled.div`
    background-color: #2355e6;
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    width: 270px;
    padding: 20px 16px;

    text-align: center;
    p {
        color: ${({ theme }) => theme.palette.common.white};
        font-size: 13px;
        font-weight: 400;
        opacity: 0.7;
    }

    position: absolute;

    :nth-of-type(1) {
        top: 0;
        right: 0;
    }
    :nth-of-type(2) {
        top: calc(72px - 10px);
        right: 300px;
    }
    :nth-of-type(3) {
        top: calc(72px + 72px + 30px);
        right: calc(270px + 30px + 60px);
    }
    :nth-of-type(4) {
        top: calc(72px + 72px + 72px + 30px + 20px);
        right: 300px;
    }
    :nth-of-type(5) {
        top: calc(72px + 72px + 72px + 72px + 30px + 20px - 10px);
        right: 0px;
    }
`;
