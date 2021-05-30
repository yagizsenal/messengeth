import { useMemo } from 'react'
import { Text, TextProps } from 'rebass'
import styled, {
    DefaultTheme,
    ThemeProvider as StyledComponentsThemeProvider,
    createGlobalStyle,
    css
} from 'styled-components'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
    upToExtra2Small: 320,
    upToExtraSmall: 500,
    upToSmall: 720,
    upToMedium: 960,
    upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
    (accumulator, size) => {
        ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
            @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
                ${css(a, b, c)}
            }
        `
        return accumulator
    },
    {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(): Colors {
    return {
        // base
        white,
        black,

        // text
        text1: '#FFFFFF',
        text2: '#C3C5CB',
        text3: '#6C7284',
        text4: '#565A69',
        text5: '#2C2F36',

        // backgrounds / greys
        bg1: '#202231',
        bg2: 'rgb(22, 21, 34)',
        bg3: '#2a3a50',
        bg4: '#3a506f',
        bg5: '#6C7284',

        //specialty colors
        modalBG: 'rgba(0,0,0,.425)',
        advancedBG: 'rgba(0,0,0,0.1)',

        //primary colors
        primary1: '#0094ec',
        primary2: '#0097fb',
        primary3: '#00aff5',
        primary4: '#376bad70',
        primary5: '#153d6f70',

        // color text
        primaryText1: '#6da8ff',

        // secondary colors
        secondary1: '#0094ec',
        secondary2: '#17000b26',
        secondary3: '#17000b26',

        // other
        red1: '#FD4040',
        red2: '#F82D3A',
        red3: '#D60000',
        green1: '#27AE60',
        yellow1: '#FFE270',
        yellow2: '#F3841E',
        blue1: '#0094ec',
        borderRadius: '10px',
        blue4: '#C4D9F8',
        blue5: '#EBF4FF'
    }
}

export function theme(): DefaultTheme {
    return {
        ...colors(),

        grids: {
            sm: 8,
            md: 12,
            lg: 24
        },

        //shadows
        shadow1: '#000',

        // media queries
        mediaWidth: mediaWidthTemplates,

        // css snippets
        flexColumnNoWrap: css`
            display: flex;
            flex-flow: column nowrap;
        `,
        flexRowNoWrap: css`
            display: flex;
            flex-flow: row nowrap;
        `
    }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const themeObject = useMemo(() => theme(), [])

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
    color: ${({ color, theme }) => (theme as any)[color]};
`

export const type = {
    main(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'text2'} {...props} />
    },
    link(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
    },
    black(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'text1'} {...props} />
    },
    white(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'white'} {...props} />
    },
    body(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
    },
    mediumHeader(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} fontSize={20} {...props} />
    },
    subHeader(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={400} fontSize={14} {...props} />
    },
    small(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} fontSize={11} {...props} />
    },
    blue(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'blue1'} {...props} />
    },
    darkGray(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={'text3'} {...props} />
    },
    italic(props: TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
    },
    error({ error, ...props }: { error: boolean } & TextProps): JSX.Element {
        return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
    }
}

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: #BFBFBF;
  background-color: #0D0415;
}

input, textarea {
    font-family: "DM Sans", sans-serif;
    font-display: fallback;
  }

body {
  min-height: 100vh;
`
