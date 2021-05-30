import React, { HTMLProps, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

export const LinkStyledButton = styled.button<{ disabled?: boolean }>`
    border: none;
    text-decoration: none;
    background: none;

    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ theme, disabled }) => (disabled ? theme.text2 : theme.primary1)};
    font-weight: 500;

    :hover {
        text-decoration: ${({ disabled }) => (disabled ? null : 'underline')};
    }

    :focus {
        outline: none;
        text-decoration: ${({ disabled }) => (disabled ? null : 'underline')};
    }

    :active {
        text-decoration: none;
    }
`

const StyledLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #0094ec;
    font-weight: 500;

    :hover {
        text-decoration: underline;
    }

    :focus {
        outline: none;
        text-decoration: underline;
    }

    :active {
        text-decoration: none;
    }
`

export const StyledDotGreen = styled.div`
    width: 8px;
    height: 8px;
    min-height: 8px;
    min-width: 8px;
    margin-left: 0.5rem;
    margin-top: 1.5px;
    border-radius: 50%;
    position: relative;
    background-color: ${({ theme }) => theme.green1};
`

export const StyledDotRed = styled.div`
    width: 8px;
    height: 8px;
    min-height: 8px;
    min-width: 8px;
    margin-left: 0.5rem;
    margin-top: 1.5px;
    border-radius: 50%;
    position: relative;
    background-color: ${({ theme }) => theme.red1};
`

export const StyledDotYellow = styled.div`
    width: 8px;
    height: 8px;
    min-height: 8px;
    min-width: 8px;
    margin-left: 0.5rem;
    margin-top: 1.5px;
    border-radius: 50%;
    position: relative;
    background-color: ${({ theme }) => theme.yellow1};
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    animation: ${rotate360} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
    transform: translateZ(0);

    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 2px solid ${({ theme }) => theme.green1};
    background: transparent;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;

    left: -3px;
    top: -3px;
`

export const SpinnerRed = styled.div`
    animation: ${rotate360} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
    transform: translateZ(0);

    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 2px solid ${({ theme }) => theme.red1};
    background: transparent;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;

    left: -3px;
    top: -3px;
`

/**
 * Outbound link that handles firing google analytics events
 */
export function ExternalLink({
    target = '_blank',
    href,
    rel = 'noopener noreferrer',
    ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & { href: string }): JSX.Element {
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement>) => {
            // don't prevent default, don't redirect if it's a new tab
            if (target === '_blank' || event.ctrlKey || event.metaKey) {
                console.debug('Fired outbound link event', href)

            } else {
                event.preventDefault()
                window.location.href = href
            }
        },
        [href, target]
    )
    return <StyledLink target={target} rel={rel} href={href} onClick={handleClick} {...rest} />
}

