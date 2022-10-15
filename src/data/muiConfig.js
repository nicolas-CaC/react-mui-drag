const breakpoints = {
    breakpoints: {
        values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
        }
    }
}

const typography = {
    mifont: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
    }
}

const palette = {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        verdecito: '#bef67a',
        violetita: '#efefef',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        verdecito: '#5a9216',
        violetita: '#8d8d8d',
        contrastText: '#000',
    },
    neutral: {
        main: '#64748B',
        contrastText: '#fff',
    },
    navbar: {
        main: '#000000',
        contrastText: '#ffffff'
    },
    hamburger: {
        main: '#ffffff'
    }
}


export const config = {
    breakpoints,
    palette,
    typography
}
