import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  @media (min-width: 1156px) {
    width: 1090px;
  }

  @media (min-width: 992px) and (max-width: 1155px) {
    width: 960px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 740px;
  }
`;
export const Subfooter = styled.div`
  background-color: #0078be;
  display: flex;
`;

export const SubfooterLinks = styled.div`
  text-transform: uppercase;
  padding: 0 10px 0 0;
  margin: 18px 10px 0 0;

  border-right: 0.5px solid #4393ca;
  &:last-child {
    border-right: 0;
  }

  div:first-of-type {
    margin-bottom: 20px;
    font-size: 22px;
    color: #003553;
    border: 0;
    line-height: 22px;
    white-space: nowrap;
  }

  div:last-of-type {
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  a {
    color: #fff;
    font-size: 9px;
    line-height: 10px;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0 6px 0 0;
    padding: 0;
    text-align: left;
    @media screen and (max-width: 767px) {
      display: block;
    }
    li {
      word-break: break-all;
      line-height: 12px;
    }
  }
`;

export const Certicates = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  margin: 15px 0px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
    margin-top: 50px;
    list-style: none;

    li {
      padding: 0px 7px;
    }
  }

  h5 {
    margin-top: 6px;
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
    margin: 16px 0 16px;
    line-height: 24px;
  }
`;

export const LastTwo = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.div`
  padding: 20px;
  color: #aeadb3;
  font-size: 11px;
  font-weight: normal;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  text-transform: uppercase;
  line-height: 1.42857143;
`;
