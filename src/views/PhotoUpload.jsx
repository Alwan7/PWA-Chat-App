import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export default function PhotoUpload() {

  const g = useNamedContext('global');

  // State
  const s = useStates({
    file: '',
    base64url: '',
    fileNameOnServer: '',
    tags : ''
  });

  // Listen for changes to the file filed to trigger a preview
  useEffect(async () => {
    if (!s.file) { return; }
    // Read the file object from the file input field
    let data = await read(document.forms.fileUploadForm.file.files[0]);
    // Scale
    s.base64url = await scale(data, 1500, 1500, 0.75);
  }, [s.file]);

  // Upload the image
  const uploadImg = async e => {
    e.preventDefault();
    // Create a new photo in the db
    let newPhoto = new Photo({
      author: g.user._id,
      url: s.base64url,
      tags: s.tags
    });
    let result = await newPhoto.save();
    s.fileNameOnServer = result.url;
  }

  // Reset for a new upload
  const newUpload = () => {
    // reset all state variables
    // to show an empty form again
    s.fileNameOnServer = '';
    s.base64url = '';
    s.file = '';
  }

  return <SFC

    template=
    {<Container component="main" maxWidth="xs" className='upload-container'> 
    
      <Col>
        <If c={!s.fileNameOnServer}>
          <form name="fileUploadForm" onSubmit={uploadImg}>
            <h1 className="mb-3">Upload your image</h1>
            <p>
            <Button
              variant="contained"
              component="label"
              style={{backgroundColor: '#3C096C', color: '#FFFFFF', margin: '10px'}}>
              
            
              Browse
              <TextField type="file" hidden accept="image/*" capture name="file"
                {...s.bind('file')} id="outlined-basic" label="Outlined" variant="outlined" />
              {/* <input
                type="file"
                hidden
                accept="image/*" capture name="file"
                {...s.bind('file')}
                
              /> */}
            </Button>
              {/* <input type="file" accept="image/*" capture name="file" {...s.bind('file')} /> */}
              <br />
              <TextField type="text" id="outlined-basic" label="Add your tags" variant="outlined" name="tags" {...s.bind('tags')} style={{backgroundColor: '#FFFFFF', color: '#FFFFFF', margin: '10px'}}/>
            {/* <input type="text" placeholder="Add your tags" name="tags" {...s.bind('tags')} /> */}
            <br />
              <If c={s.base64url}>
                
              <Button type="submit" value="Upload" variant="contained" color="secondary" style={{backgroundColor: '#3C096C', color: '#FFFFFF', margin: '10px'}}>
                Upload
                
              </Button>
                {/* <input type="submit" value="Upload" /> */}
              </If>
            </p>
            <If c={s.base64url}>
              <p><img className="previewImage" src={s.base64url} /></p>
            </If>
          </form>
          <Else>
            <p>The photo has been uploaded!</p>
            <a target="_blank" href={'/uploads/' + s.fileNameOnServer}>Here's a link to your photo</a>
            <p className="mt-3"><Button variant="primary" onClick={() => newUpload()}>Upload another image</Button></p>
          </Else>
        </If>
      </Col>
      <Footer />
      
      </Container>}

    style=
    {/*css*/`

      .previewImage {
        max-width: 300px;
        width:
      }

      input[type="submit"]{
        margin-left: 30px;
        
      }
      .upload-container {
        background-color: #10002B;
        width: 100%;
        height: 100vh;
        color: white;
        text-align: center
      }
      body {
        text-align: center;
      }
  
    `}
  />
}