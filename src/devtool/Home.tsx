import React from "react";
import styled from "styled-components";

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
            <Body>
                <p>- you can make developer tools using browser extension capabilties.</p>
                <br/><br/>
                <p>- just update the devtools_page key in manifest.json to point to your devtool html document and you are ready to build.</p>
            </Body>
        </HomeContainer>
    )
}

export default Home;