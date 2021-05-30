import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function MainNav() {

  let g = useNamedContext('global');

  function close(e) {
    // hide menu after choice if in hamburger mode
    let toggler = document.querySelector('.navbar-toggler');
    toggler.clientHeight && toggler.click();
  }

  async function logout() {
    await Login.logout();
    delete g.user;
  }

  return (
    <div style={styles.topbar}>
      {g.user && <span>
        <span style={styles.name} >
          {g.user.name}
        </span>
          <a   style={styles.link} href="#" onClick={logout}>
          <ExitToAppIcon />
          </a>
        </span>}
    </div>
  )}


const styles = {
  topbar : {
    'backgroundColor': '#10002B',
    'color': '#eee',
    'padding': '10px',
    'borderBottom': '3px solid #00457e',
    'position': 'fixed',
    'top': '0',
    'width': '100%',
    'textAlign': 'end',
    zIndex: '10'
  },
  logout : {
      'paddingRight': '20px'
  },
  name : {
    'float' : 'left'
  },
  link : {
    'color' : '#fff'
  }
}