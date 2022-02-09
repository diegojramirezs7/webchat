import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CreateIcon from '@mui/icons-material/Create';
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';
import { authContext } from "../services/auth";
import { Avatar, TextField } from '@mui/material';
import CustomTextField from './customTextField';

const drawerWidth = 240;

export default function Sidebar(props) {
    let auth = useContext(authContext);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showConvo, setShowConvo] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [convos, setConvos] = useState([]);

    useEffect(() => {
        const temps = [
            {
                name: "User 1",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "User 2",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Emma Stone",
                message: "some good old message",
                image: "https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Katie Boulter ",
                message: "some good old message",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Katie_Boulter_%2841917218900%29.jpg/1200px-Katie_Boulter_%2841917218900%29.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "User 1",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "User 2",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Emma Stone",
                message: "some good old message",
                image: "https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "User 2",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Emma Stone",
                message: "some good old message",
                image: "https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Katie Boulter ",
                message: "some good old message",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Katie_Boulter_%2841917218900%29.jpg/1200px-Katie_Boulter_%2841917218900%29.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Emma Stone",
                message: "some good old message",
                image: "https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "User 2",
                message: "some good old message",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Emma Stone",
                message: "some good old message",
                image: "https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
            {
                name: "Katie Boulter ",
                message: "some good old message",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Katie_Boulter_%2841917218900%29.jpg/1200px-Katie_Boulter_%2841917218900%29.jpg",
                messages: [
                    {
                        text: "hello, how are you?",
                        datetime: Date(),
                    },
                    {
                        text: "good, and you?",
                        datetime: Date(),
                    },
                    {
                        text: "Banger baby",
                        datetime: Date(),
                    }
                ]
            },
        ];
        setConvos(temps);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const options = [{ name: 'Contacts', icon: <ContactPageIcon /> }, { name: 'Conversations', icon: <ChatBubbleIcon /> }, { name: 'Start Convo', icon: <CreateIcon /> }];


    const selectConvo = (index) => {
        setShowConvo(true);
        setActiveIndex(index);
    }

    const selectSection = (index) => {
        setShowConvo(false);
        setActiveIndex(index);
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {options.map((option, index) => (
                    <ListItem button key={option.name} onClick={() => selectSection(index)}>
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        <ListItemText primary={option.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {convos.map((convo, index) => (
                    <ListItem button key={index} onClick={() => selectConvo(index)}>
                        <ListItemIcon>
                            <Avatar src={convo.image} />
                        </ListItemIcon>
                        <ListItemText primary={convo.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const ShowSection = () => {
        return (showConvo) ? Conversation(convos[activeIndex]) : Section(options[activeIndex]);
    }

    const Section = (section) => {
        return (
            <div>
                <Typography>
                    {section.name} is the active tab
                </Typography>
            </div>
        );
    }

    const createMessage = () => {
        //createMessage();
    }

    const Conversation = (convo) => {
        return (
            <div display={{ position: "relative" }}>
                {/* <Typography>
                    {convo.message} from {convo.name} is the active convo
                </Typography> */}
                <ChatMsg
                    avatar={convo.image}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                    ]}
                />
                <ChatMsg
                    side={'right'}
                    messages={[
                        "Great! What's about you?",
                        'Of course I did. Speaking of which check this out',
                    ]}
                />
                <ChatMsg
                    avatar={convo.image}
                    messages={[
                        "Great! What's about you?",
                        'Of course I did. Speaking of which check this out',
                    ]}
                />
                <ChatMsg
                    side={'right'}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                    ]}
                />
                <ChatMsg
                    avatar={convo.image}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                    ]}
                />
                <ChatMsg
                    avatar={convo.image}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                    ]}
                />
                <ChatMsg
                    side={'right'}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                    ]}
                />
                <div style={{ position: "fixed", bottom: 0, left: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)`, backgroundColor: "#777", height: "7.5vh" }}>
                    <TextField fullWidth InputProps={{ style: { color: '#fff' } }} />
                </div>
            </div>
        );
    }

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {(showConvo) ? convos[activeIndex].name : options[activeIndex].name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography> */}
                <ShowSection />
            </Box>
        </Box>
    );
}
