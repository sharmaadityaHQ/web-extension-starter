import React from "react";
import styled from "styled-components";
import Header from "@src/components/Header";
import { GlobalStyles } from "@src/styles/GlobalStyles";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: 30px;
    &::-webkit-scrollbar {
        display: none;
    }
    p {
        color: #161616;
        font-size: 14px;
        font-weight: 500;
    }
`;

const Home = () => {
    return (
        <>
            <GlobalStyles />
            <HomeContainer>
                <Header title="UI TYPE: POPUP" />
                <Body>
                    <p>- you can serve your extension as a popup to the user</p>
                    <br/><br/>
                    <p>- just update the action key in manifest.json to point to your popup html document and you are ready to build.</p>
                </Body>
            </HomeContainer>
        </>
    )
}

export default Home;