import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Fragment, useState } from 'react';
import { DrawerList } from './DrawerList';
import { menu } from './../../data/datos'

export const DrawerHeader = ({ children }) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) { return }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={ {
                width: anchor === 'top'
                    || anchor === 'bottom'
                    ? 'auto'
                    : 250
            } }
            role="presentation"
            onClick={ toggleDrawer(anchor, false) }
            onKeyDown={ toggleDrawer(anchor, false) }
        >
            <DrawerList lista={ menu.listaUno } />
            <Divider />
            <DrawerList lista={ menu.listaDos } />

        </Box>
    );

    return (
        <div>
            { ['left'].map((anchor) => (
                <Fragment key={ anchor }>
                    <Button onClick={ toggleDrawer(anchor, true) }>
                        { children }
                    </Button>
                    <Drawer
                        anchor={ anchor }
                        open={ state[anchor] }
                        onClose={ toggleDrawer(anchor, false) }
                    >
                        { list(anchor) }
                    </Drawer>
                </Fragment>
            )) }
        </div>
    );
}
