import React from "react";
import styled from "styled-components";
import Header from "@src/components/Header";
import { GlobalStyles } from "@src/styles/GlobalStyles";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
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
                <Header title="UI TYPE: SIDEBAR" />
                <Body>
                    <p>- you can serve your extension as a sidebar to the user</p>
                    <br/><br/>
                    <p>- just update the side_panel key for chrome, sidebar_action key for firefox in manifest.json to point to your sidebar html document and you are ready to build.</p>
                    <br/><br/>
                    <p>
                        - when an extension that defines a sidebar is first installed, its sidebar will be opened automatically. it's not possible
                        for an extension to open sidebars programmatically. sidebars can only be opened by the user.
                    </p>
                </Body>
            </HomeContainer>
        </>
    )
}

export default Home;