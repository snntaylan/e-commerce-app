import Logo from "../../assets/ecommerce.png";
import { Badge, Box, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemDecorator } from "@mui/joy";
import { HomeRounded } from "@mui/icons-material";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Container } from "@mui/material";
import { useAppSelector } from "../../store/hook";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import Face3RoundedIcon from '@mui/icons-material/Face3Rounded';
import ChildCareRoundedIcon from '@mui/icons-material/ChildCareRounded';

function Header() {

  const selectedItems = useAppSelector((state) => state.cart.selectedItems)

  return (
    <header className="ecm__header">
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>

          <Grid>
            <img src={Logo} alt="Logo Image" style={{ maxWidth: '54px' }} />
          </Grid>

          <Grid>
            <Box>
              <List
                role="menubar"
                orientation="horizontal"
                sx={{
                  '--List-radius': '8px',
                  '--List-padding': '4px',
                  '--List-gap': '8px',
                  '--ListItem-gap': '0px',
                }}
              >
                <ListItem role="none">
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="#navigation-menu"
                  >
                    <ListItemDecorator>
                      <HomeRounded />
                    </ListItemDecorator>
                    Home
                  </ListItemButton>
                </ListItem>
                <ListItem role="none">
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="#navigation-menu"
                  >
                    <ListItemDecorator>
                      <FaceRoundedIcon />
                    </ListItemDecorator>
                    Men
                  </ListItemButton>
                </ListItem>
                <ListItem role="none">
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="#navigation-menu"
                  >
                    <ListItemDecorator>
                      <Face3RoundedIcon />
                    </ListItemDecorator>
                    Women
                  </ListItemButton>
                </ListItem>
                <ListItem role="none">
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="#navigation-menu"
                  >
                    <ListItemDecorator>
                      <ChildCareRoundedIcon />
                    </ListItemDecorator>
                    Kids
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid>

            <Box display={"flex"}>
              <IconButton variant="plain" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                <Badge color="warning" badgeContent={selectedItems.length}>
                  <LocalMallOutlinedIcon />
                </Badge>
                <div>Cart</div>
              </IconButton>
            </Box>

          </Grid>
        </Grid>

      </Container>

      <Divider />
    </header>
  );
}

export default Header;
