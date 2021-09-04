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

  p {
    font-size: 11px;
    line-height: 12px;
    color: #fff;
  }
`;
export const NewsletterContent = styled.div`
  padding-top: 13px;
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 1fr;
  div {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    width: 90%;
    white-space: nowrap;
    button {
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
    width: 85%;
    margin-right: 2rem;
    background-color: ${({ theme }) => theme.colors.newsletterInput};
    font-size: 16px;
    height: 33px;
    color: #696969;
    border-radius: 0;
    border: 0;
    outline: none;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`;

export const Links = styled.div`
  display: flex;
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
`;
