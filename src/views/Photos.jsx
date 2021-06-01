
export default function Photos(props) {
  const s = useStates({});

  useEffect(async () => {
    console.log(props.userId)
    // fetching all photos
    s.photos = await Photo.find({ author: props.userId }).populate('author');
    // newest photos on top
    s.photos.sort((a, b) => a.posted > b.posted ? -1 : 1);
  }, []);
  


  
  return <SFC
  
  template=
  {!s.photos ? null : 
    <div className="post">
      <div className="postWrapper">
        <h1>{props.userId ? 'My photos' : 'All photos'}</h1>
        {s.photos.map((photo, i) =>
          <div className="post" key={i}>
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <span className="postProfileImg"></span>
                  <span className="postUsername">User: {photo.author.name}</span>
                  <br />   
                  <span className="postDate">Posted at: {(photo.posted).slice(0,10)}</span> 
                </div>
              </div>
              <div div className="postCenter" key={photo._id}>
                  <img className="postImg" src={'/uploads/' + photo.url} alt="" />
              </div>
          </div>
      </div>  
    )}
      </div>
    </div>}

style=
{/*css*/`

.photo {
  display: inline-block;
  width: 33.3%;
        border: 15px solid #fff;
      }

      h1 {
        padding-left: 15px;
      }

      img {
        width: 100%;
        padding : 5px;
      }
      post {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 16px -8px rgba(143, 132, 132, 0.68);
        box-shadow: 0px 0px 16px -8px rgba(128, 118, 118, 0.68);
        margin: 30px 0;
        color: #fff;
      }
      postWrapper {
        padding: 10px;
      }
      
      postTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      postTopLeft {
        display: flex;
        align-items: center;
      }
      
      postProfileImg {
        width: 35px;
        height: 35px;
        color: burlywood;
      }
      
      postUsername {
        font-size: 15px;
        font-weight: 500;
        margin: 10px 10px 10px 20px;
      }
      
      postDate{
          font-size: 12px;
      }
      
      postCenter{
          margin: 20px 0;
          

      }
      
      postImg{
          margin-top: 20px;
          width: 100%;
          max-height: 500px;
          object-fit: contain;
      }
      
      postBottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      postBottomLeft{
          display: flex;
          align-items: center;   
      }
      
      likeIcon-like,
      likeIcon{
          width: 24px;
          height: 24px;
          margin-right: 5px;
          cursor: pointer;
      }
    
      likeIcon{
          color: red;
      }
      likeIcon-like{
          color: rgb(0, 110, 255);
      }
      
      postLikeCounter{
          font-size: 15px;
      }
      
      postCommentText{
          cursor: pointer;
          border-bottom: 1px dashed gray;
          font-size: 15px;
      }
      
  
    `}
  />
}