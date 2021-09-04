import styled from 'styled-components';
// export const Container = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  background-color: #edeef0;
  width: 100%;
  margin: 10px 0 20px 0;

  display: table;
  margin-right: auto;
  margin-left: auto;
  p {
    color: ${({ theme }) => theme.colors.menuHover};
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;

    padding: 5px;

    text-align: center;

    span {
      color: #3399cc;
    }
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  gap: 1rem;
`;
