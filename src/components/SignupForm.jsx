import logo from './logo/logo.svg';
export default function LoginForm() {

  const g = useNamedContext('global');

  const s = useStates({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
    failMessage: ''
  });

  async function signup(e) {
    e.preventDefault();
    if (s.password !== s.passwordAgain) {
      s.failMessage = 'Passwords did not match. Please try again!';
      return;
    }
    let newUser = new User({
      name: s.name,
      email: s.email,
      password: s.password
    });
    let result = await newUser.save();
    if (result.error) {
      s.failMessage = 'Email taken, please try another one!';
      return;
    }
    // success, so login
    await Login.login({ email: s.email, password: s.password });
    g.user = await Login.check();
  }

  return <SFC

    template=
    {<div className="container">
    <h1 className="mb-3">Sign up</h1>
    <If c={s.failMessage}>
      <p className="text-danger">{s.failMessage}</p>
    </If>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <form onSubmit={signup} className="box">
                        <img src={logo} alt="Logo" />
                            <input type="text" name="" placeholder="Enter your name" {...s.bind('name')} />
                            <input type="email" name="" placeholder="Enter email" {...s.bind('email')}/>
                            <input type="password" name="" placeholder="Password" {...s.bind('password')}/>
                            <input type="password" name=""  placeholder="Repeat the password" {...s.bind('passwordAgain')}/>
                            <input type="submit" name="" value="Register" href="#"/>
                          <div className="col-md-12">
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>}

    style=
    {/*css*/`
    .container{
      background-color: #10002B;
      width: 100%;
      height: 100vh;
    }
    .card {
      margin-bottom: 20px;
      border: none
  }
  
  .box {
      width: 100%;
      top: 50%;
      left: 50%;
      text-align: center;
      transition: 0.25s;
      background-color: #10002B;
  }
  .box input[type="text"],
  .box input[type="email"],
  .box input[type="password"] {
      border: 0;
      background: none;
      display: block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #3498db;
      padding: 10px 10px;
      width: 250px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s
  }
  
  .box h1 {
      color: white;
      text-transform: uppercase;
      font-weight: 500
  }
  .box input[type="text"]:focus,
  .box input[type="email"]:focus,
  .box input[type="password"]:focus {
      width: 300px;
      border-color: #2ecc71
  }
  
  .box input[type="submit"] {
      border: 0;
      background: none;
      display: block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #2ecc71;
      padding: 14px 40px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;
      cursor: pointer
  }
  
  .box input[type="submit"]:hover {
      background: #2ecc71
  }
  
  .forgot {
      text-decoration: underline
  }
  
  ul.social-network {
      list-style: none;
      display: inline;
      margin-left: 0 !important;
      padding: 0
  }
  
  ul.social-network li {
      display: inline;
      margin: 0 5px
  }
  
  .social-network a.icoFacebook:hover {
      background-color: #3B5998
  }
  
  .social-network a.icoTwitter:hover {
      background-color: #33ccff
  }
  
  .social-network a.icoGoogle:hover {
      background-color: #BD3518
  }
  
  .social-network a.icoFacebook:hover i,
  .social-network a.icoTwitter:hover i,
  .social-network a.icoGoogle:hover i {
      color: #fff
  }
  
  a.socialIcon:hover,
  .socialHoverClass {
      color: #44BCDD
  }
  
  .social-circle li a {
      display: inline-block;
      position: relative;
      margin: 0 auto 0 auto;
      border-radius: 50%;
      text-align: center;
      width: 50px;
      height: 50px;
      font-size: 20px
  }
  
  .social-circle li i {
      margin: 0;
      line-height: 50px;
      text-align: center
  }
  
  .social-circle li a:hover i,
  .triggeredHover {
      transform: rotate(360deg);
      transition: all 0.2s
  }
  
  .social-circle i {
      color: #fff;
      transition: all 0.8s;
      transition: all 0.8s
  }
  .p-tag{
      color: #fff;
  }
  .reg-icon{
      color: #fff;
      size: 20px;
  }
    `}
  />;

}




/* <>
  <div className="container">
      <h1 className="mb-3">Sign up</h1>
      <If c={s.failMessage}>
        <p className="text-danger">{s.failMessage}</p>
      </If>
          <div className="row">
              <div className="col-md-6">
                  <div className="card">
                      <form onSubmit={signup} className="box">
                          <img src={logo} alt="Logo" />
                              <input type="text" name="" placeholder="Enter your name" {...s.bind('name')} />
                              <input type="email" name="" placeholder="Enter email" {...s.bind('email')}/>
                              <input type="password" name="" placeholder="Password" {...s.bind('password')}/>
                              <input type="password" name=""  placeholder="Repeat the password" {...s.bind('passwordAgain')}/>
                              <input type="submit" name="" value="Register" href="#"/>
                            <div className="col-md-12">
                              <Button variant="primary" type="submit">Sign up</Button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
  </> */