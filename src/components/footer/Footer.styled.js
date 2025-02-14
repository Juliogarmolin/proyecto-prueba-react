import styled from 'styled-components';

export const FooterContainer = styled.footer`

  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const FooterLinks = styled.div`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 4px;

    /* Aplica solo a los enlaces que NO sean el primero */
    &:not(:first-child)::before {
      content: "|";
      margin: 0 8px;
      color: #fff;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterCopy = styled.div`
  margin-bottom: 10px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

/* Íconos de redes sociales */
export const SocialIcons = styled.div`
  display: flex;
  a {
    margin: 0 5px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

/* Íconos de tiendas */
export const StoreIcons = styled.div`
  display: flex;
  a {
    margin: 0 5px;
  }

  img {
    width: 120px;
  }
`;
