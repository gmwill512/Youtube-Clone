import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerState] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#" alt="">
          Shop Tesla
        </a>
        <a href="#" alt="">
          Account
        </a>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <ExitWrapper onClick={() => setBurgerState(false)}>
          <ExitButton />
        </ExitWrapper>

        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="#">
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
        <li>
          <a href="">Semi</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>
        <li>
          <a href="">powerwall</a>
        </li>
        <li>
          <a href="">commercial energy</a>
        </li>
        <li>
          <a href="">utilities</a>
        </li>
        <li>
          <a href="">test Drive</a>
        </li>
        <li>
          <a href="">Find us</a>
        </li>
        <li>
          <a href="">support</a>
        </li>
        <li>
          <a href="">united states</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 0 10px 10px;
    flex-wrap: nowrap;
    margin-right: 20px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  text-transform: uppercase;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex:
  flex-direction: column;
  justify-content: center;
  text-align: left;
  transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(100%)`)};
  transition: transform 0.1s ease-in;
  li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,.2);

      a{
          font-weight:600;

      }
  }
`;

const ExitButton = styled(CloseIcon)`
  cursor: pointer;
`;

const ExitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
