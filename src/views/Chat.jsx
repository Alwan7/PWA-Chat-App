import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";
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
    {<div className="chat">
      <div className="rooms">
        <div className="roomList">
          <h4>Rooms</h4>
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
            <input type="text" className="input-crate form-control shadow-none" placeholder="New room" {...s.bind('newRoom')} />
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
          <Link to='/'><span className= 'back-icon'><ArrowBackIcon /></span></Link>
            <input type="text" className="input-send form-control shadow-none" placeholder="Write message" {...s.bind('message')} />
            <div className="input-group-append">
              <button className="btn-send" type="button submit"><SendIcon/></button>
            </div>
          </div>
        </form>
      </div>
    </div>}

    style=
    {/*css*/`

      .writeMessage {
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #10002B;
        border-top: 3px solid #00457e;
      }
      
      .messageForm {
        width: calc(100% - 30px);
        
      }

      .addRoomForm {
        display: block;
        position: absolute;
        bottom: 10px;
        left: 10px;
        width: calc(100% - 22px);
      }

      .rooms {
        position: fixed;
        width: 25vw;
        height: 90%;
        top: 0;
        color : #fff;
        background-color: #10002B;
        border-radius: 10px;
        border-right: 3px solid #00457e;
      }

      .rooms h4 {
        padding-left: 10px;
      }

      .roomList {
        position: absolute;
        width: calc(100% - 20px);
        overflow: scroll;
        top: 10px;
        bottom: 50px;
      }

      .room {
        padding: 5px 10px;
        cursor: pointer;
      }

      .room.active {
        font-weight: bold;
      }

      .messages {
        margin-left: 25vw;
        height: 100vh;

      }

      .message {
        position: relative;
        padding: 5px 10px;
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

      .chat {
        background-color: #10002B;
        width: 68vh;
        height: 100%;
      }
      .btn {
        background-color: #10002B;
        color : #fff;
        width : 100%;
        border : none;
        text- decoration : none;
      }
      .input-send{
        width : 310px;
        margin-left : 50px;
        border : none;
        text- decoration : none;
        shadow: none;
        background-color: #10002B;
        color : #fff;
      }
      .back-icon{
        font-size: 20px;
        margin-left : 20px;
        color : #fff;
      }
      .btn-send {
        background-color: #10002B;
        border : none;
        height: 30px;
        color : #fff;
      }
    `}
  />;
}