 import AddIcon from '@material-ui/icons/Add';
 import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
export default function Chat() {

  // Note:
  // The script utilities/updateHandler.js 
  // fetches all messages and rooms

  const g = useNamedContext('global');

  useEffect(() => {
    // Scroll to bottom of page after each update
    window.scrollTo(0, 1000000);
  });

  const s = useStates({
    message: '',
    newRoom: ''
  });

  async function send(e) {
    e.preventDefault();
    let newMessage = new Message({
      author: g.user._id,
      text: s.message,
      room: g.myRoom
    });
    await newMessage.save();
    s.message = '';
  }

  function addRoom(e) {
    e.preventDefault();
    g.rooms.push(s.newRoom);
    g.myRoom = s.newRoom;
    s.newRoom = '';
  }

  function switchRoom(e) {
    g.myRoom = e.target.innerHTML;
  }

  function formatDate(sent) {
    // format date to local time
    let d = new Date(sent);
    return d.toLocaleString();
  }

  return <SFC

    template=
    {<>
      <div className="rooms">
        <div className="roomList">
        <Link to='/'><span className= 'back-icon'><ArrowBackIcon /></span></Link>
          <h4><ChatIcon/> Rooms</h4>
        {(g.rooms || []).map(room =>
            <div
              onClick={switchRoom}
              className={'room' + (room === g.myRoom ? ' active' : '')}
              key={room}>
              {room}
            </div>
          )}
        </div>
        <form className="addRoomForm" autoComplete="off" onSubmit={addRoom}>
          <div className="input-group">
          <TextField
          id="outlined-full-width"
          label="Create a new room"
          style={{ margin: 8 }}
          placeholder="New room"
          
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          inputProps={{
            style: { color: '#fff'}
        }}
          variant="outlined"
          type="text" 
          {...s.bind('newRoom')}
        />
            {/* <input type="text" className="input-crate form-control shadow-none" placeholder="New room" {...s.bind('newRoom')} /> */}
              <button className="btn" type="button submit"><AddIcon/></button>
          </div>
        </form>
      </div>

      <div className="messages">
        {g.messages.filter(message => message.room === g.myRoom).map(message =>
          <div
            className={'message' + (message.author._id === g.user._id ? ' my' : '')}
          >
            <p>
              {message.author.name}<br />
              <span>{formatDate(message.sent)}</span>
            </p>
            <p>{message.text}</p>
          </div>
        )}
      </div>

      <div className="writeMessage">
        <form className="messageForm" autoComplete="off" onSubmit={send}>
          <div className="input-group m-3">
          
          <TextField multiline type="text" id="standard-textarea" rows={2}  label="Write message"  name="tags" {...s.bind('message')} style={{backgroundColor: '#FFFFFF', color: '#FFFFFF', margin: '10px',width: '80%'}}/>
          {/* <TextField id="outlined-basic"  label="add your tags" variant="outlined" {...s.bind('message')} />
            <input type="text" className="input-send form-control shadow-none" placeholder="Write message"{...s.bind('message')} /> */}
            <div className="input-group-append">
              <button className="btn-send" type="button submit"><SendIcon/></button>
            </div>
          </div>
        </form>
      </div>
    </>}

    style=
    {/*css*/`
  
      .writeMessage {
        width: 100%;
        background-color: #10002B;
        bottom : 0;
        position : relative to parent;
      }
      
      .messageForm {
        width: calc(100% - 30px);
        
      }

      .addRoomForm {
        bottom: 10px;
        width: 100%;
        
      }

      .rooms {
        width: 100%;
        color : #fff;
        top: 0;
        background-color: #10002B;
        border-radius: 10px;
        z-index : 10;
        position : relative to parent;
      }

      .rooms h4 {
        padding-left: 10px;
      }

      .roomList {
       
        overflow: scroll;
        bottom: 50px;
        padding:20px 20px 20px;
        background-color:#240046;
        ;
        ;

      }

      .room {
        padding: 5px 10px;
        cursor: pointer;

      }

      .room.active {
        font-weight: bold;
      }

      .messages {
        width: 100%;
        height: 100%;
      }

      .message {
        border-radius: 10px;
        background-color: #ddd;
        padding: 20px;
        width: 50%;
        margin-bottom: 20px;
        clear: both;
        background-color: #4c91c9;
        color : #fff;
      }

      .my.message {
        float: right;
        background-color: #00457e;
        color: #fff;
        
      }

      .my.message p:first-child {
        text-align: right;
        
      }

      .message:last-child {
        margin-bottom: 0;
      }

      .message p {
        margin: 0;
      }

      .message p:first-child {
        font-weight: bold;
        font-size: 80%;
        margin-bottom: 10px
      }
      .btn {
        background-color: #10002B;
        color : #fff;
        width : 100%;
        border : none;
        text- decoration : none;
      }
      .input-send{
        width : 100px;
        margin-left : 50px;
        border : none;
        text- decoration : none;
        shadow: none;
        background-color: #10002B;
        color : #fff;
      }
      .back-icon{
        
        font-size: 20px;
        margin-left : 0;
        color : #fff;
      }
      .btn-send {
        background-color: #10002B;
        border : none;
        
        color : #fff;
      }
    `}
  />;
}