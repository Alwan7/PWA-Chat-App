import ChatIcon from '@material-ui/icons/Chat';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
export default function Footer() {

  return (
    <Container maxWidth="xs">
    <div style={styles.bottombar}>
            <Link to='/'><span style={styles.link}><HomeIcon/></span></Link>
            <Link to='/my-photos'><span style={styles.link}><AccountBoxIcon/></span></Link>
            <Link to='/photo-upload'><span style={styles.link}><AddBoxIcon/></span></Link>
            <Link to='/chat'><span style={styles.link}><ChatIcon/></span></Link>
      </div>
      </Container>
  )
}

const styles = {

  bottombar : {
    'backgroundColor': '#10002B',
      'color': '#eee',
      'textShadow': '0 0 3px black',
      'padding': '10px 10px 30px 10px',
      'borderTop':  '3px solid #00457e',
      'position': 'fixed',
      'bottom': '0',
      'width': '100%',
      'left': '0',
      'display:': 'flex',
    },
    link : {
      'color' : '#fff',
      'marginLeft' : '2%',
      'paddingBottom' : '5px',
    }
}
