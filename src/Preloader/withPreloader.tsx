import React from 'react';
import StyledPreloader from './StyledPreloader'

export interface WithPreloaderProps {
    time?: number;
    animation?: 'fade' | 'slide' | 'slide-down' | 'slide-right' | 'slide-left';
    color?: string;
    background?: string;
    customLoading?: boolean;
}

const defaultProps : WithPreloaderProps = {
    time: 1000,
    animation: 'fade',
    color: '#2D2D2D',
    background: '#F7F7F7',
    customLoading: false
}

export const withPreloader = (Element : React.ReactNode) => (props: WithPreloaderProps)  => {
    const propsOrDefault = {...defaultProps, ...props};
    return <>
        {/*@ts-ignore*/}
        <StyledPreloader {...propsOrDefault} >
            {/*@ts-ignore*/}
            <Element className={props.className} />
        </StyledPreloader>
    </>
};
