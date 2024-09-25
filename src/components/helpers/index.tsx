import React from "react";
import styled from "styled-components";

interface CrossProps {
    color?: string;
    onClick: () => void;
}

export const Cross = ({ color = 'black', onClick }: CrossProps) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={onClick}>
        <path d="M2 10L6 6L2 2" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M10 10L6 6L10 2" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
    </svg>
);

export const HorizontalDivider = styled.div`
    background-color: ${({ color }) => color ?? 'black'};
    margin: 0px;
    width: 100%;
    height: 1px;
    position: relative;
`;