import React from 'react';
import styled from "styled-components";
import CircleStyles from "./circle-styles";
import {withPreloader, WithPreloaderProps} from "../preloader/withPreloader";

interface Props extends WithPreloaderProps{
    className: string;
    color: string;
}

const Circle : React.FC<Props> = props => {

    return <>
        <svg className={props.className} height="50" width="50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                stroke={props.color}
                fill="none"
                strokeWidth="2.5"
                strokeMiterlimit="10"
            />
        </svg>
    </>
};

const StyledCircle = styled(Circle)`
  ${CircleStyles}
`;

export default withPreloader(StyledCircle);
