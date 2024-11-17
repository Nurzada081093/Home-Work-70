import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { useState } from 'react';
import { Container } from '@mui/joy';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  const [color, setColor] = useState<ColorPaletteProp>('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={[
        {
          p: 3,
          minWidth: 'min-content',
        },
        color !== 'warning' &&
        ((theme) => ({
          background: `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
        })),
      ]}
    >
      <Container sx={[
        {
          display: 'flex',
          alignItems: 'center',
        },
      ]}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors: ColorPaletteProp[] = [
              'primary',
              'neutral',
              'danger',
              'success',
              'warning',
            ];
            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small"/>
        </IconButton>
        <Box sx={{flex: 1, display: 'flex', gap: 1, px: 2}}>
          <Dropdown>
            <MenuButton
              sx={{'--Button-radius': '1.5rem'}}
              variant="outlined"
              endDecorator={<KeyboardArrowDownIcon/>}
            >
              <NavLink to={'/'} style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}>Contacts</NavLink>
            </MenuButton>
            <Menu
              variant="outlined"
              placement="bottom-start"
              disablePortal
              size="sm"
              sx={{
                '--ListItemDecorator-size': '24px',
                '--ListItem-minHeight': '40px',
                '--ListDivider-gap': '4px',
                minWidth: 200,
              }}
            >
              <MenuItem>
                <NavLink to="/contacts" style={{color: 'white', textDecoration: 'none'}}>
                  <ListItemDecorator>
                    <BubbleChartIcon sx={{marginRight: '10px'}}/>
                  </ListItemDecorator>
                  Contacts
                </NavLink>
              </MenuItem>
              <ListDivider/>
              <NavLink to="/contacts/add" style={{color: 'white', textDecoration: 'none'}}>
                <MenuItem>
                  Add new contact
                  <Chip
                    variant="outlined"
                    size="sm"
                    sx={(theme) => ({
                      ml: 'auto',
                      bgcolor: `rgba(${theme.vars.palette[color].mainChannel} / 0.4)`,
                    })}
                  >
                    Beta
                  </Chip>
                </MenuItem>
                </NavLink>
            </Menu>
          </Dropdown>
        </Box>
        <Box sx={{display: 'flex', flexShrink: 0, gap: 2}}>
          <Button to={'/contacts/add'} component={NavLink} startDecorator={<AddIcon/>} sx={{display: {xs: 'none', md: 'inline-flex'}}}>
            Add new contact
          </Button>
          <Badge badgeContent={0} variant="solid" color="danger">
            <IconButton variant="soft" sx={{borderRadius: '50%'}}>
              <NotificationsIcon/>
            </IconButton>
          </Badge>
        </Box>
      </Container>
    </Sheet>
  );
};

export default ToolBar;