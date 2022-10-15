import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from "react-router-dom"

export const DrawerList = ({ lista }) => {

    return (
        <List>
            { lista.map(({ text, link, desc }, index) => (
                <ListItem
                    key={ text }
                    disablePadding>
                    <Link style={ { textDecoration: 'none', width: '100%' } }
                        to={ link }>

                        <ListItemButton>
                            <ListItemIcon>
                                { index % 2 === 0
                                    ? <InboxIcon />
                                    : <MailIcon /> }
                            </ListItemIcon>
                            <ListItemText
                                primary={ text }
                                secondary={ desc }
                                sx={ { color: '#000000', textDecoration: 'none' } }
                            />
                        </ListItemButton>
                    </Link>
                </ListItem>
            )) }
        </List>
    )
}