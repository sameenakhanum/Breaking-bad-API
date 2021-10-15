import { useState, useEffect } from 'react';
import style from './BreakingCard.module.css';

const url = "https://www.breakingbadapi.com/api/characters"

function Details(){
    const[data, setData] = useState([]);
   
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch();
    }, []);


    return(
      <div className={style.card}>
        {data.map((item) => 
        <div key={item.id} className={style.container}>
        <img src={item.img} alt="characters" />
         
            <div>
                  Name : {item.name}
            </div>
            <div>
                  Birthday : {item.birthday}
            </div>
            <div>
                  Nickname : {item.nickname}
            </div>

        </div>
        )}
      </div>
    );
}

export default Details;