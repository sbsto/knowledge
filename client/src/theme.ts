import { createMuiTheme } from "@material-ui/core/styles"

const fontFamilySerif = "Garamond, serif"
const fontFamilySansSerif = "-apple-system, BlinkMacSystemFont, sans-serif"

export default createMuiTheme({
    palette: {
        primary: {
            main: "#333333",
            contrastText: "#f5f5f5"
        },
        secondary: {
            main: "#f5f5f5",
            contrastText: "#f5f5f5"
        },
        text: {
            primary: "#333333"
        },
        background: {
            default: "#f5f5f5"
        }
    },
    typography: {
        fontFamily: fontFamilySansSerif,
        fontSize: 18,
        h1: {
            fontFamily: fontFamilySerif,
            fontWeight: 600,
            fontSize: 64
        },
        h2: {
            fontFamily: fontFamilySerif,
            fontWeight: 600,
            fontSize: 48
        },
        h3: {
            fontFamily: fontFamilySerif,
            fontWeight: 400,
            fontSize: 40
        },
        subtitle1: {
            fontFamily: fontFamilySansSerif,
            fontWeight: 400,
            fontSize: 40
        },
        subtitle2: {
            fontFamily: fontFamilySansSerif,
            fontWeight: 400,
            fontSize: 24
        },
        button: {
            fontFamily: fontFamilySansSerif,
            textTransform: 'none',
            fontWeight: 500,
        }
    },
    shape: {
        borderRadius: 4
    }
})