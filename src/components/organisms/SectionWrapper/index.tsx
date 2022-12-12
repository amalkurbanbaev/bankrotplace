import styled, { css } from 'styled-components';

type SectionWrapperProps = {
    bgColor?: 'accent' | 'white' | 'grey';
};

const blueSectionStyles = css`
    background: ${({ theme }) => theme.palette.accent};
    * {
        color: ${({ theme }) => theme.palette.common.white};
    }
`;
const whiteSectionStyles = css`
    background: ${({ theme }) => theme.palette.common.white};
    * {
        color: ${({ theme }) => theme.palette.accent};
    }
`;
const greySectionStyles = css`
    background: ${({ theme }) => theme.palette.grey.bg3};
    * {
        color: ${({ theme }) => theme.palette.accent};
    }
`;

export const SectionWrapper = styled.section<SectionWrapperProps>`
    width: 100%;
    padding-top: 180px;
    padding-bottom: 100px;

    ${(props) => (props.bgColor === 'accent' ? blueSectionStyles : undefined)}
    ${(props) => (props.bgColor === 'white' ? whiteSectionStyles : undefined)}
    ${(props) => (props.bgColor === 'grey' ? greySectionStyles : undefined)}
`;

SectionWrapper.defaultProps = {
    bgColor: 'white',
};
