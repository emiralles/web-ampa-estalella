import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../../typography/Typography';
import TextField from '../../textfield/TextField';
import Icons from "bootstrap-icons/bootstrap-icons.svg";

function Copyright() {
  return (
    <>
      {'© '}
      <Link color="inherit" href="https://google.com/">
      AriMath, Inc
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
  mr: 1,
  '&:hover': {
    bgcolor: 'grey',
  },
};

// const LANGUAGES = [
//   {
//     code: 'en-US',
//     name: 'English',
//   },
//   {
//     code: 'fr-FR',
//     name: 'Français',
//   },
// ];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'grey', width:'100%' }}
    >
      <Container sx={{ my: 4, display: 'flex', width:'100%' }}>
        <Grid container spacing={5} sx={{ width:'100%' }}>
          <Grid item xs={6} sm={4} md={3} sx={{ width:'100%' }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 40, width:'100%' }}
            >
              <Grid item sx={{ display: 'flex', width:'100%' }}>
                {/* <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box> */}
                <Box component="a" href="https://www.instagram.com/estalellaigraells/?igshid=YmMyMTA2M2Y=" sx={iconStyle} target="_blank" rel="noreferrer">
                  {/* <img
                    src="/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  /> */}
                  <svg className="bi" width="24" height="24"><use xlinkHref={`${Icons}#instagram`}></use></svg>
                  {/* <a className="text-muted" href="https://www.instagram.com/estalellaigraells/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><svg className="bi" width="24" height="24"><use xlinkHref={`${Icons}#instagram`}></use></svg></a> */}
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid> */}
          {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}
          {/* <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Typography>
  );
}