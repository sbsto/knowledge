import { createMuiTheme } from "@material-ui/core/styles"

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"

export default createMuiTheme({
    palette: {
        primary: {
            main: "#333333"

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
        fontSize: 24,
        h1: {
            fontFamily,
            fontWeight: 600,
            fontSize: 64
        }
    }
})