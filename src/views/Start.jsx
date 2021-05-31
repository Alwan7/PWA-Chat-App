import MainNav from "../components/MainNav"
import Camera from "../components/Camera"
export default function Start() {
  return (
  <div style={styles.homeContainer}>
  <MainNav/>
    <h1>Welcome!</h1>
    <Camera />
    <Photos/>
    <Footer />
  </div>
  )}

  const styles = {
    homeContainer : {
      'backgroundColor': '#10002B',
      'color': '#eee',
      'width': '100%',
      'height': '100%',
      'zIndex': '10',
      'marginBottom': '40px'
    }
  }