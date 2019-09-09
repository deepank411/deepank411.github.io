/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import theme from '../theme';
import Header from "./header";
import "./layout.css";

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  min-height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 24px;
  font-family: sans-serif;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.buttonBackground};
  color: ${props => props.theme.colors.buttonColor};
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: none;
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = React.useState(
    stored === "true" ? true : false
  );

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Card>
            Dark Mode is Disabled
          <Button onClick={() => {
              document.getElementById('top').scrollIntoView(true);
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDarkMode", !isDarkMode);
          }}>Toggle Dark Mode</Button>
          </Card>
        </Container>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout;
