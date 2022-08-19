interface Animation {
    direction: 'up' | 'down' | 'right' | 'left';
    name: string;
}

export interface AnimationsProps{
    animation: Animation;
    loadingStatus: boolean;
}

export const slideAnimation = (props : AnimationsProps) => {
    if (props.animation.name === 'slide') {
        if (props.animation.direction) {
            if (props.animation.direction === 'up' || props.animation.direction === 'down') {
                return `top: ${props.loadingStatus ? 0 : `${props.animation.direction === 'up' ? '-100%' : '100%'}`};
     transition: 0.5s;`;
            }
            return `left: ${props.loadingStatus ? 0 : `${props.animation.direction === 'right' ? '100%' : '-101%'}`};
              top: 0;
              transition: 0.5s;`;
        }
        return `top: ${props.loadingStatus ? 0 : '-100%'};
            transition: 0.5s;`;
    }
    return `top: 0; 
          left: 0;`;
};

export const fadeAnimation = (props : AnimationsProps) => props.animation.name === 'fade'
    && ` opacity: ${props.loadingStatus ? 1 : 0};
       visibility: ${props.loadingStatus ? 'visible' : 'hidden'};
       transition: opacity 0.3s linear, visibility 0.2s linear 0.3s;`;
