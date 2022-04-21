import 'styled-components'

interface IColors {
  red: string
  gray: string
  pink: string
  pinkLight: string
  grayLight: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
  }
}
