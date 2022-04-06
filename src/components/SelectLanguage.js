import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import { grey } from '@mui/material/colors';

import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'rgba(0,0,0,.87)',
      contrastText: '#fff',
    },
  },
});

export default function BasicMenu(props) {
  const {t, i18n} = useTranslation();
  
  const changeLanguage = (language) => {
    handleClose();
    i18n.changeLanguage(language);
    props.onChangeLanguage();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={t("tooltip.lang")} arrow>
        <Button
          color="neutral"
          id="basic-button"
          onClick={handleClick}
        >
          <TranslateIcon sx={{ color: grey[900] }} />
          <ArrowDropDownIcon sx={{ color: grey[900] }} />
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => changeLanguage("ru") }>Русский</MenuItem>
        <MenuItem onClick={() => changeLanguage("en-US") }>English</MenuItem>
      </Menu>
    </ThemeProvider >
  );
}
