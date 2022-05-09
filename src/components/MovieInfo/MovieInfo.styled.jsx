import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const MainWrapper = styled.div`
  padding: 0 100px;
`;

export const Section = styled.section`
  margin-top: 10px;
  padding: 80px;
  display: flex;
`;

export const Image = styled.img`
  width: 400px;
`;
export const InfoThumb = styled.div`
  padding: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #585858;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  font-size: 18px;
  color: #585858;
  margin-bottom: 10px;
`;
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 20px;
}`;

export const GoBackBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  background-color: #585858;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 100px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    transform: scale(0.92);
  }
  :hover {
    opacity: 0.8;
  }
`;

export const ExtraInfo = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  background-color: #585858;
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const AditionalText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

export const ExtraPagesList = styled.ul``;

export const Item = styled.li`
  display: block;
  margin-bottom: 8px;
  align-items: center;
  // transform: scale(1);
  transition: all 250ms;
  :hover {
    opacity: 0.8;
  }
  :last-child {
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: #585858;
  display: block;
  margin-bottom: 8px;
`;

export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: 5px;
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 5px;
  height: 13px;
`;
