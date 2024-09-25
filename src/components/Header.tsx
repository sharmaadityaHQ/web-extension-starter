import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Cross, HorizontalDivider } from "./helpers";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: move;
    flex: 0 0 auto;
`;

const HeaderContent = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    background: #FBFBFB;
`;

const CrossContainer = styled.div`
    display: flex;
    margin-left: auto;
    cursor: auto;
`;

const Heading = styled.p`
    color: #161616;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.4px;
`;

const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    pos3 = e.clientX;
    pos4 = e.clientY;
    const draggableElement = document.getElementById('app-container')!;

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    const dragElement = (e: MouseEvent) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        draggableElement.style.top = (draggableElement.offsetTop - pos2) + "px";
        draggableElement.style.left = (draggableElement.offsetLeft - pos1) + "px";
    }

    document.onmouseup = closeDragElement;
    document.onmousemove = dragElement;
}

const handleClose = () => {
    const container = document.getElementById('app-container');
    const cta = document.getElementById('app-cta');
    container!.style.visibility = 'hidden';
    cta!.style.visibility = 'visible';
}

const Header = () => {
    const header = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (header.current) {
            header.current.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            header.current?.removeEventListener('mousedown', handleMouseDown);
        }
    }, [header.current])

    return (
        <HeaderContainer ref={header}>
            <HeaderContent>
                <Heading>
                    UI TYPE: CUSTOM APP
                </Heading>
                <CrossContainer>
                    <Cross onClick={handleClose} />
                </CrossContainer>
            </HeaderContent>
            <HorizontalDivider color="#E0E0E0" />
        </HeaderContainer>
    )
}

export default Header;