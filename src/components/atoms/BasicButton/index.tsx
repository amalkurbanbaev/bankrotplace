import { StyledButton } from './BasicButton.styled';
import { BasicButtonProps } from './types';

export const BasicButton = (props: BasicButtonProps): JSX.Element => {
    const { children, linkType = undefined, href = '', ...rest } = props;

    if (linkType === 'external') {
        return (
            <StyledButton
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...rest}
                size="sm"
            >
                {children}
            </StyledButton>
        );
    }
    return <StyledButton {...rest}>{children}</StyledButton>;
};
