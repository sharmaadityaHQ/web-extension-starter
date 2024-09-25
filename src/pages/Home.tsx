import React from "react";
import styled from "styled-components";
import Header from "@src/components/Header";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
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
        <HomeContainer>
            <Header />
            <Body>
                <p>- you can inject a custom app into the page of your choice using content scripts.</p>
                <br/><br/>
                <p>- just update the content_scripts url match pattern in manifest.json and you are ready to go.</p>
            </Body>
        </HomeContainer>
    )
}

export default Home;