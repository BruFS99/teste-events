import { createGlobalStyle } from 'styled-components'

interface IColors {
  red: string
  gray: string
  pink: string
  pinkLight: string
  grayMedium: string
  white: string
}

interface ISpacing {
  quark: string
  nano: string
  medium: string
}

interface IFont {
  family: {
    primary: string
  }
  size: {
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
  }
  weight: {
    black: string
    bold: string
    semiBold: string
    regular: string
    light: string
  }
}

interface IPadding {
  nano: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
}
interface IBorder {
  radius: {
    nano: string
    medium: string
  }
}

export interface ITheme {
  colors: IColors
  spacing: ISpacing
  font: IFont
  padding: IPadding
  border: IBorder
}

export default createGlobalStyle<{ theme: ITheme }>`
  * {
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
  }

  *, button, input {
    border:0;
    background:none;
    font-family: ${({ theme }) => theme.font.family.primary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
  }
`
