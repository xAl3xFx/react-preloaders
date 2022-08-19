import styled from "styled-components";
import PreloaderStyles from "./preloader-styles";
import React, {useEffect, useState} from "react";

const StyledPreloader = styled.div`
  ${PreloaderStyles}
`;

interface Props {
    children: React.ReactNode;
    background: string;
    color: string;
    time: number;
    customLoading: boolean;
    animation: 'fade' | 'slide' | 'slide-down' | 'slide-right' | 'slide-left';
}

const Preloader : React.FC<Props> = (props) => {
    const [loading, setLoading] = useState(true);
    //@ts-ignore
    const childrenWithProp = React.Children.map(props.children, (child) => React.cloneElement(child, {
        color: props.color
    }));

    const generateAnimation = () => {
        const animate = props.animation && props.animation.split('-');
        return {
            name: animate && animate[0],
            direction: animate && animate[1],
        };
    };

    const detectBg = () => {
        if (props.background === 'blur') {
            return 'rgba(94, 85, 85, 0.32941176470588235)';
        }
        return props.background;
    };

    useEffect(() => {
        if (props.customLoading === false) {
            setTimeout(() => {
                setLoading(false);
            }, props.time);
        }
        if (props.customLoading === undefined) {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    setTimeout(() => {
                        setLoading(false);
                    }, props.time);
                }
            };
        }
    }, [props.customLoading]);

    useEffect(() => {
        if (props.background === 'blur') {
            const nodes = Object.values(
                //@ts-ignore
                document.getElementById('preloader').parentNode.childNodes,
                //@ts-ignore
            ).filter(i => i.id !== 'preloader');
            nodes.forEach((el) => {
                //@ts-ignore
                el.style.filter = loading ? 'blur(5px)' : 'blur(0px)';
            });
        }
    }, [loading]);

    return (
        <StyledPreloader
            //@ts-ignore
            animation={generateAnimation()}
            background={detectBg()}
            loadingStatus={loading}
            id="preloader"
        >
            {childrenWithProp}
        </StyledPreloader>
    );
}

export default Preloader;
