import styled from 'styled-components'

import { ITheme } from 'styles/Global'

interface IContainerProps {
  size: string
}

interface IGetColorProps {
  theme: ITheme
}

const getColor = ({ theme }: IGetColorProps) => theme.colors.red

const getSizeLoading = ({ size }: IContainerProps) => size

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${getSizeLoading};
  height: ${getSizeLoading};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${getSizeLoading};
    height: ${getSizeLoading};
    border: 3px solid ${getColor};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${getColor} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
