import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import PublicIcon from '@mui/icons-material/Public';
// import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
// import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
//import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

const categories = [
  {
    id: 'Apartats',
    children: [
      { id: "L'afa", 
        sublista: [
            { id: "Qui Som", href: "/admin/index/quisom", icon: <DnsRoundedIcon /> },
            { id: "Comissions", href: "/admin/index/comissions", icon: <PermMediaOutlinedIcon /> },
            { id: "Fer se soci", href: "/admin/index/festesoci", icon: <PermMediaOutlinedIcon /> },
            { id: "Contacta'ns", href: "/admin/index/contactans", icon: <PermMediaOutlinedIcon /> },
        ], 
        icon: <PeopleIcon />, 
        active: true
      },
      { id: 'Serveis', 
        sublista: [
            { id: "Acollida", href: "/admin/index/acollida", icon: <DnsRoundedIcon /> },
            { id: "Menjador", href: "/admin/index/menjador", icon: <PermMediaOutlinedIcon /> },
            { id: "Llibres", href: "/admin/index/llibres", icon: <PermMediaOutlinedIcon /> },
            { id: "Extraescolars", href: "/admin/index/extraescolars", icon: <PermMediaOutlinedIcon /> },
            { id: "Equipament", href: "/admin/index/equipament", icon: <PermMediaOutlinedIcon /> },
            { id: "Casal d'estiu", href: "/admin/index/casalestiu", icon: <PermMediaOutlinedIcon /> },
            { id: "Tardes de juny", href: "/admin/index/tardesjuny", icon: <PermMediaOutlinedIcon /> },
        ], 
        icon: <DnsRoundedIcon /> },
      { id: "Espai d'transparència", 
        sublista: [
            { id: "Estatus", href: "/admin/index/estatus", icon: <DnsRoundedIcon /> },
            { id: "Pressupostos", href: "/admin/index/pressupostos", icon: <PermMediaOutlinedIcon /> },
            { id: "Actes", href: "/admin/index/actes", icon: <PermMediaOutlinedIcon /> },
        ], 
        icon: <PermMediaOutlinedIcon /> },
        { id: "Otros", 
        sublista: [
            { id: "Esdeveniments", href: "/admin/index/esdeveniments", icon: <DnsRoundedIcon /> },
            { id: "Noticies", href: "/admin/index/noticies", icon: <PermMediaOutlinedIcon /> },
        ], 
        icon: <PermMediaOutlinedIcon /> },
    ],
  },
  {
    id: 'Reportes',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> , sublista:[{ id: 'servicio1', icon: <DnsRoundedIcon /> },
      { id: "servicio2", icon: <PermMediaOutlinedIcon /> },] },
    ],
  },
];

const item = {
  py: '1px',
  px: 1,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: '#009846!important', // 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 0.5,
  px: 1,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff', bgcolor:'#009846' }}>
          Afa Estalella
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory, bgcolor:'#009846' }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Admin - A.F.A.</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#009846' }}>
            <ListItem sx={{ py: 1, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, sublista: lista, icon, active })=>(
                    <Box key={id} sx={{ bgcolor: '#009846' }}>
                        <ListItem sx={{ ...item, py: 1, px: 3 }} key={childId}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText sx={{ color: '#fff' }}>{childId}</ListItemText>
                            {/* <ListItemButton selected={active} sx={item}>
                                
                            </ListItemButton> */}
                        </ListItem>
                        {lista.map(({ id: childhoodId, href: referencelink, icon, active })=>(
                                <ListItem disablePadding key={childhoodId} sx={{ ...item, py: 0, px: 6 }}>
                                    <ListItemButton selected={active} sx={item} href={referencelink}> 
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText>{childhoodId}</ListItemText>
                                    </ListItemButton>                    
                                </ListItem>
                        ))}
                    </Box>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}