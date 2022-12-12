import { ComponentPropsWithoutRef } from 'react';

export type BasicButtonProps = ComponentPropsWithoutRef<'button'> &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        variant?: 'primary' | 'submit';
        linkType?: 'external';
        href?: string;
        size?: 'sm' | 'md';
    };
