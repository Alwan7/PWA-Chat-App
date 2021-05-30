import ChatIcon from '@material-ui/icons/Chat';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from "react-router-dom";
export default function Footer() {

  return (
    <div style={styles.bottombar}>
            <Link to='/'><span style={styles.link}><HomeIcon/></span></Link>
            <Link to='/my-photos'><span style={styles.link}><AccountBoxIcon/></span></Link>
            <Link to='/photo-upload'><span style={styles.link}><AddBoxIcon/></span></Link>
            <Link to='/chat'><span style={styles.link}><ChatIcon/></span></Link>
      </div>
  )
}

const styles = {

  bottombar : {
    'backgroundColor': '#10002B',
      'color': '#eee',
      'textShadow': '0 0 3px black',
      'padding': '10px 10px 30px 10px',
      'borderTop':  '3px solid #00457e',
      'height': '40px',
      'position': 'fixed',
      'bottom': '0',
      'width': '100%',
      'left': '0',
    },
    link : {
      'color' : '#fff',
      'margin' : '5px 30px 5px 60px',
      'paddingBottom' : '5px'
    }
}
