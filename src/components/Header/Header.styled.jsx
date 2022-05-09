import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px 0;
  background: linear-gradient(90deg, #050b5c, #1a73e8);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
  font-family: 'Roboto';
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  margin-left: 40px;
  color: #ffffff;
  font-size: 24px;
  align-items: center;
`;

export const Logo = styled(BiMoviePlay)`
  width: 30px;
  height: 30px;
  transition: opacity 250ms;
  margin-right: 5px;
  color: #ffffff;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
  transform: scale(1);
  transition: transform 250ms;
  :hover {
    transform: scale(1.1);
  }

  :last-child {
    margin-right: 0;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  color: #ffffff;
  transition: opacity 250ms;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  :hover {
    opacity: 0.8;
  }
`;
