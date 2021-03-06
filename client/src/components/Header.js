import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

class Header extends Component {
  constructor(props) {
    super(props);

  }

    shouldComponentUpdate() {
      return false;
      //component was rerending with each new character, preventing typing
      //--quick fix for now but would spend more time making Input a controlled component
    }

    render() {

      const BlockchainLogo = styled.img.attrs(({ src }) => ({
        src: src,
      }))`
        width: 200px;
        position: relative;
        margin-left: 30px;
        top: 40px;
        z-index: 50;
        display: block;
      `;

      const SearchIcon = styled.img.attrs(({ src }) => ({
        src: src,
      }))`
        width: 30px;
        position: absolute;
        z-index: 50;
        top: 88px;
        left: 43px;
      `;

      const AddressInput = {
         height: "40px",
         position: 'relative',
         display: 'inline',
         fontSize: '14px',
         border: 'none',
         borderRadius: '50px',
         marginTop: '60px',
         width: '100%',
         marginLeft: '10%',
         paddingLeft: '50px',
         transform: 'translate(-50px, 0px)',
         marginLeft: '80px',
         border: '3px solid black'
       }

       const Button = styled.button`
         width: 100px;
         height: 40px;
         background-color: #00aee6;
         cursor: pointer;
         position: relative;
         border-radius: 50px;
         color: white;
         font-size: 14px;
         display: inline-block;
         font-weight: 600;
         letter-spacing: 2px;
         border: 3px solid black;
         margin-top: 20px;
         float:right;
         transform: translate(85px, 0px);
         transition: all 0.3s ease 0s;
         &:hover {
           background:white;
           color: black;
         }
         &:active {
           background:black;
           color: white;
         }
       `;

       const SearchContainer = styled.div`
         width: 60%;
       `;

        const headerStyle = {
          position: 'relative',
          backgroundColor: '#004a7c',
          width: `100%`,
          paddingBottom: '100px'
        };


      return (

        <div className="Header" style={headerStyle}>
           <a href="https://www.blockchain.com/" target="_blank"><BlockchainLogo src={require("../assets/white-blockchain.svg")} /></a>
              <SearchContainer>
                <SearchIcon src={require("../assets/search-icon.png" )}/>
                <input style={AddressInput} type="text" placeholder="Enter Address" onChange={this.props.handleChange}/>
                <Button onClick={this.props.handleSearch}>Search</Button>
              </SearchContainer>
        </div>

      )
    }
  }



export default Header
