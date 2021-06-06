export default function MyPhotos() {
  const g = useNamedContext('global');
  return (
    <div style={styles.myContainer}>
  <Photos {...{ userId: g.user._id }} />
  <Footer />
  </div>
  )}


  const styles = {
    myContainer : {
      'backgroundColor': '#10002B',
      'color': '#eee',
      'width': '100%',
      'height': '100%',
      'zIndex': '10',
      'marginBottom': '40px'
    }
  }