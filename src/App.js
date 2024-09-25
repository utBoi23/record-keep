import Header from './components/Header';
import './App.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App() {

  const[name,SetName] = useState("") 
  const[email,SetEmail] = useState("")
  const[data,SetData] = useState([])

  const addData = () => {
SetData([...data,{name,email}])
SetName("")
SetEmail("")
  }

  const removeData = (index) => {
let arr = data;
arr.splice(index,1);
SetData([...arr]);
  }
  return (
    <div className='App'>
    <Header/>
    <div className='form'>

    <Stack direction= "row" spacing={2}>
    <TextField value={name} onChange={(e) => SetName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />
    <TextField value={email} onChange={(e) => SetEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
    <Button variant="contained" onClick={addData} color='success'>{<AddIcon/>}</Button>

    </Stack>
    </div>
<div className='data'>
<div className='data-val'>



<h4>Name</h4>
<h4>Email</h4>
<h4>Remove</h4>

</div>


{
  data.map((element,index ) => {
    return(
<div className='data-val'>
<h4>{element.name}</h4>
<h4>{element.email}</h4>


<Button variant="text" onClick={() => removeData(index)} color='error'> <DeleteIcon/> </Button>


</div>
    )

  })
}
</div>


    </div>
  );
}

export default App;
