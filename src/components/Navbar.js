import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import StyledButton from './StyledButton'
class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper className="navbar navbar-expand-sm px-sm-5">
            {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img className="navbar-brand" src={logo} alt="Home Link"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                <StyledButton>
                <span className="mr-2"> 
                    <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </StyledButton>
                </Link>
            </NavbarWrapper>
        );
    }
}

export default Navbar;

const NavbarWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;