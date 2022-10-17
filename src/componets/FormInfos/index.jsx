import React, { useCallback, useEffect, useState } from 'react';
import info from '../../../utils/json/certificates.json'
import {FormInfosContainer,Infos} from './styles';

function FormInfos() {
  
  const [idcomp,setIdComp] = useState('96c7d86d-698d-4b60-9f0e-73be61d7dc71');

  const [type,setType] = useState([]);

  const [options,setOptions] = useState([]);

  const [name,setName] = useState();

  const [value,setValue] = useState();

  const [selectedInfo, setSelectedInfo] = useState('');


  useEffect(() => {
    
    setOptions([]);
    setDesc([]);
    setValue([]);
    
  },[idcomp])


  const handleClick = useCallback((id)=> { 

    setIdComp(id)
    
    const obj = info.find(E => E.id === id);
    
  
    if(obj){
      setName(obj.name)
      setType(obj.type);
      
      // setDesc(obj.description);

      console.log(type)

    } else {
      setType([]);
    
    }

  },[]);


  return (

    <FormInfosContainer>

        <ul>
          {info.map((modo)=> {

          return (

            <li key={modo.id}>
              {/* selectedInfo={selectedInfo===modo.id} */}
              <h3>
                <a className='title' onClick={()=> handleClick(modo.id)}> {modo.title} </a>
              </h3>
            </li>

        )})}
        </ul>  
      
      <Infos>
        
        {type && type.map( (id)  =>  {

        return  ( 
              <div key={type.id}>
                  <h2>{}</h2>
                  <h3>{id.label}</h3>
                  <p>{id.description}</p>
                  <p>{id.tempo}</p>
                  <p>R$ {id.value},00</p>
                  <button>Cta teste</button>

              </div>
              )
      })}

      </Infos>
    </FormInfosContainer>
  );
}

export default FormInfos;