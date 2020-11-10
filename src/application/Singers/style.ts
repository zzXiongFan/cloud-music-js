import styled from 'styled-components';
import style from '../../assets/global-style';

export const NavContainer  = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: auto;
`

export const ListItem = styled.div`
  box-sizing: border-box;
  margin: 0 5px;
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${style["border-color"]};
  .img-wrapper {
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 3px;
    }
  }
  .name {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    font-weight: 500;
  }
`