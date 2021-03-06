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
export const Content = styled.div`
  padding: 1rem 7rem;
  @media screen and (max-width: 777px) {
    padding: 0;
  }
  p {
    font-size: 11px;
    line-height: 12px;
    color: #fff;
  }
`;
export const NewsletterContent = styled.div`
  padding-top: 13px;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  div {
    padding-left: 1rem;
    width: 95%;
    white-space: nowrap;
  }
  h4 {
    margin-top: 6px;
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
    line-height: 22px;
  }
  input {
    padding-left: 1rem;
    width: 100%;
    margin-right: 2rem;
    background-color: ${({ theme }) => theme.colors.newsletterInput};
    font-size: 16px;
    height: 33px;
    color: #696969;
    border-radius: 0;
    border: 0;
    outline: none;
  }
  button {
    justify-self: start;
    color: #885f23;
    text-transform: uppercase;

    line-height: 19px;
    height: 33px;
    padding: 0 7px;
    background-color: #ff9900;
    text-align: center;
    border: 0;
    transition: all 0.8s linear;
    font: 700 12px Titillium Web, sans-serif;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactTitle = styled.div`
  font-weight: bold;
  margin-top: 6px;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  line-height: 22px;
  padding-bottom: 6px;
`;

export const Numbers = styled.div`
  text-align: justify;
  display: flex;
  justify-content: baseline;
  white-space: nowrap;
  padding: 1rem;
  span {
    font-weight: bold;
    padding: 0px 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    p {
      display: flex;
      justify-content: space-between;
    }
    margin-bottom: 5px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 15px;
  div {
    margin-right: 15px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.footer1};

    a {
      svg {
        margin-top: 7.5px;

        color: ${({ theme }) => theme.colors.footer1};
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
