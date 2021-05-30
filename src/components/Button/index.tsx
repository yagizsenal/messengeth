import { darken } from 'polished'
import { Button as RebassButton } from 'rebass/styled-components'
import styled, { keyframes } from 'styled-components'

const Base = styled(RebassButton)<{
    padding?: string
    width?: string
    borderRadius?: string
    altDisabledStyle?: boolean
}>`
    padding: ${({ padding }) => (padding ? padding : '16px')};
    width: ${({ width }) => (width ? width : '100%')};
    font-weight: 500;
    text-align: center;
    border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
    outline: none;
    border: 1px solid transparent;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 1;
    &:disabled {
        cursor: auto;
    }

    > * {
        user-select: none;
    }
`

const sheen = keyframes`{
  100% {
    transform: rotateZ(60deg) translate(1em, -30em);
  }
}`

export const ButtonPrimary = styled(Base)`
  /* background-color: ${({ theme }) => theme.primary1}; */
  overflow:hidden;
  background: linear-gradient(to right, #0094ec , #f537c3);
  background-origin: border-box;
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    /*background: ${({ theme }) => darken(0.05, theme.primary1)};*/
    background: linear-gradient(to right, #0094ec , #f537c3);
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    /*background: ${({ theme }) => darken(0.1, theme.primary1)};*/
    background: linear-gradient(to right, #0094ec , #f537c3);
  }
  &:disabled {
    pointer-events: none;
    background: ${({ theme, altDisabledStyle, disabled }) =>
        altDisabledStyle ? (disabled ? theme.bg3 : theme.primary1) : theme.bg3};
    color: ${({ theme, altDisabledStyle, disabled }) =>
        altDisabledStyle ? (disabled ? theme.text3 : 'white') : theme.text3};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.5' : '1')};
  }
  &:hover {
    /*background: ${({ theme }) => darken(0.05, theme.primary1)};*/
    background: linear-gradient(to right, #0094ec , #f537c3);
    background-origin: border-box;
    &::after {
      animation: ${sheen} 0.5s forwards;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -130%;
    background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
    transform: rotateZ(60deg) translate(-5em, 7.5em);
  }
`

export const ButtonPrimaryNormal = styled(Base)`
    background-color: ${({ theme }) => theme.primary1};
    color: white;
    &:focus {
        box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
        background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    }
    &:hover {
        background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    }
    &:active {
        box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
        background-color: ${({ theme }) => darken(0.1, theme.primary1)};
    }
    &:disabled {
        background-color: ${({ theme, altDisabledStyle, disabled }) =>
            altDisabledStyle ? (disabled ? theme.bg3 : theme.primary1) : theme.bg3};
        color: ${({ theme, altDisabledStyle, disabled }) =>
            altDisabledStyle ? (disabled ? theme.text3 : 'white') : theme.text3};
        cursor: auto;
        box-shadow: none;
        border: 1px solid transparent;
        outline: none;
        opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.5' : '1')};
    }
`

export const ButtonSecondary = styled(Base)`
    border: 1px solid ${({ theme }) => theme.primary4};
    color: ${({ theme }) => theme.primary1};
    background-color: transparent;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ padding }) => (padding ? padding : '10px')};

    &:focus {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
        border: 1px solid ${({ theme }) => theme.primary3};
    }
    &:hover {
        border: 1px solid ${({ theme }) => theme.primary3};
    }
    &:active {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
        border: 1px solid ${({ theme }) => theme.primary3};
    }
    &:disabled {
        opacity: 50%;
        cursor: auto;
    }
    a:hover {
        text-decoration: none;
    }
`
