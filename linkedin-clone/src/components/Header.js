import React from 'react';

// styled-components
import styled from 'styled-components'

// logos
import home from "../assets/images/home-logo.svg"
import search from "../assets/images/search-icon.svg"

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={home} alt="home-logo"/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <SearchIcon>
                    <img src={search} alt="search" />
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    );
};

export default Header;


// styles here:

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;`;

const Content = styled.div`
display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;`;

  const Logo = styled.span`
  margin-right:8px;
  font-size:0px`;

  const Search = styled.span``;

  const SearchIcon = styled.span``;