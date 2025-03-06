import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#016180',  // Blue #031273
        },
        secondary: {
            main: '#0492C2',  // Light Blue 
        },
        text: {
            primary: '#7D4938',  // Dark Brown #2E1503 #4C2C17
        },
        background: {
            default: '#F8F9FA',  // Light background to complement the colors
        },
    },
    typography: {
        fontFamily: ['Commissioner', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontFamily: 'Libre Bodoni',  // For large headers
            fontWeight: 700,
            color: '#4C2C17',
        },
        h4: {
            fontFamily: 'Commissioner',
            fontWeight: 600,
            color: '#4C2C17',
        },
        body1: {
            fontFamily: 'Karla',  // Main body text font
            color: '#4C2C17',
        },
        caption: {
            fontFamily: 'Karla',  // Smaller captions or alert text
            fontSize: '0.85rem',
            color: '#4C2C17',
        },
    },
});

export default theme;
