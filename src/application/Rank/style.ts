import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListContainer = styled.div`
  position: fixed;
  top: 94px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

export const Container = styled.div`
  h1 {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${style['font-size-m']};
    color: rgb(46, 48, 48);
  }
  >ul {
    margin-top: 10px;
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const ListItem = styled.li<{global: boolean}>`
  padding: 3px 0px;
  display: ${props => props.global ? 'inline-block' : 'flex'};
  flex-direction: row;
  border-bottom: 1px solid ${style ["border-color"]};
  .image-wrapper {
    position: relative;
    width: ${props => props.global ? '32vw' : '27vw'};
    height: ${props => props.global ? '32vw' : '27vw'};
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla (0,0%,100%,0),hsla (0,0%,43%,.4));
    }
    .update-frequency {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${style['font-size-ss']};
      color: ${style ["font-color-light"]};
    }
  }
  ul {
    flex: 1 1 0%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    >li {
      font-size: ${style['font-size-s']};
      color: grey;
    }
  }
`