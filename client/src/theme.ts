import { createMuiTheme } from "@material-ui/core/styles"

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"

export default createMuiTheme({
    palette: {
        primary: {
            main: "#333333",
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
        fontFamily,
        fontSize: 18,
        h1: {
            fontFamily,
            fontWeight: 600,
            fontSize: 64
        },
        h2: {
            fontFamily,
            fontWeight: 400,
            fontSize: 30
        },
        button: {
            fontFamily,
            textTransform: 'none',
            fontWeight: 400
        }
    },
    shape: {
        borderRadius: 4
    }
})