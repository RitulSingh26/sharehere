import{ useEffect, useRef ,useState}from 'react';
import { uploadFile } from './services/api';
import './App.css';


function App() {
  const [file,setFile] = useState('');
  const[result,setResult]=useState('');
  const logo ="https://i.pinimg.com/564x/fb/65/99/fb6599c475537d627c79cafa99454064.jpg";
  useEffect(()=>{
    const getImage=async()=>{
      if(file){
         const data=new FormData();
         data.append("name",file.name);
         data.append("file",file);

        let response=await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])
 const fileInputRef=useRef();
 const onUploadClick=()=>{
  fileInputRef.current.click();
 }

  return (
    <div className='container'>
      <img src={logo} alt="picture"/>
      <div className='wrapper'>
      <h1>Simple File Sharing!</h1>
      <p>Upload and share the download link.</p>
      <button onClick={()=>onUploadClick()}>Upload</button>
      <input type="file"
        ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e) => setFile(e.target.files[0])}
      />
       <a href={result}target="_blank">{result}</a>
      </div>

    </div>
   
  );
}

export default App;
