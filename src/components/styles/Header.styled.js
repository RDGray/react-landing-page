import styled from "styled-components";

export const StyledHeader = styled.header`
  //passing props.  then access it in the header.js as "<StyledHeader bg="red">"
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;
// styled - the style components. .nav - the html tag
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;
