import React from 'react';
import styled from "styled-components";
import CircleStyles from "./circles-styles";
import {withPreloader, WithPreloaderProps} from "../preloader/withPreloader";

interface Props extends WithPreloaderProps{
    className: string;
}

const Circles : React.FC<Props> = props => {
    return  <div className={props.className} />
};

const StyledCircles = styled(Circles)`
  ${CircleStyles}
`;

export default withPreloader(StyledCircles);
