import { css } from 'styled-components';
import {slideAnimation, fadeAnimation, AnimationsProps} from './animations';

interface PreloaderStylesProps {
    background: string;
}

const PreloaderStyles = css<PreloaderStylesProps & AnimationsProps>`
  z-index: 9999;
  position: absolute;
  ${slideAnimation}
  ${fadeAnimation}
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${props => props.background};
`;

export default PreloaderStyles;
