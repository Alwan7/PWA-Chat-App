
export default withContext('global', { ready: false }, App);

function App() {

  const g = useNamedContext('global');

  useEffect(async () => {
    // Check if the user is logged in
    g.user = (await Login.check()).js;
    g.user.email || (g.user = null);
    g.ready = true;
    // Start SSE/updateHandler
    updateHandler(g);
  }, []);

  return <SFC
    template=
    {!g.ready ? null : <Router>
      <main>
        <If c={g.user}>
          <Routes />
          <Else>
            <LoginForm />
          </Else>
        </If>
      </main>
    </Router>}

    style=
    {/*css*/`

      @global {
        html {
          scroll-behavior: smooth;
        }
        
         #root > style-wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }
      }
    `}
  />;
}