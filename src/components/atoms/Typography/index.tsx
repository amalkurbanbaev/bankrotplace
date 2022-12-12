import React from 'react';

import {
    ThemeFontVariantGroupKeys,
    ThemeFontVariantSizeKeys,
} from 'theme/custom/theme';
import { getValueFromObjectPath } from 'utils/getValueFromObjectPath';

import { TypographyProps } from './types';
import { StyledTypography } from './Typography.styled';

type FontVariantToElementMap = {
    [K in ThemeFontVariantGroupKeys]: {
        [FK in ThemeFontVariantSizeKeys]: React.ElementType;
    };
};

const FONT_VARIANTS_ELEMENT_MAP: FontVariantToElementMap = {
    title: {
        large: 'h1',
        medium: 'h2',
        small: 'h3',
    },
    body: {
        large: 'p',
        medium: 'p',
        small: 'p',
    },
};

export const Typography = (props: TypographyProps): JSX.Element => {
    const {
        variant = 'body.medium',
        $color = 'common.black',
        children,
        ...rest
    } = props;

    return (
        <StyledTypography
            {...rest}
            variant={variant}
            data-variant={variant}
            $color={$color}
            as={
                getValueFromObjectPath(
                    FONT_VARIANTS_ELEMENT_MAP,
                    variant
                ) as React.ElementType
            }
        >
            {children}
        </StyledTypography>
    );
};

export type { TypographyProps } from './types';
