import React, {useState, useEffect} from "react";
//<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />
export const Contador = () => {
  
    const [num, setNum] = useState(7);
    const [dec, setDec] = useState(8);
    const [cen, setCen] = useState(0);
    const [mil, setMil] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          if (num < 9) {
            setNum(() => num + 1);
          } else {
            setNum (0);
            setDec(() => dec + 1);
          }
        }, 1000);
      });
      if (cen < 10){
        if (dec < 10){
        } else {
          setDec (0);
          setCen (()=> cen + 1);
          }
      } else {
        setCen (0);
        setMil (()=> mil + 1);
      }
    
      return (
        <div className="container fondo">
          <ul className="list-group list-group-horizontal d-flex justify-content-center" >
            <li className="list-group-item contadores" id="icon"><i class="fa-regular fa-clock"></i></li>
            <li className="list-group-item contadores">{mil}</li>
            <li className="list-group-item contadores">{cen}</li>
            <li className="list-group-item contadores">{dec}</li>
            <li className="list-group-item contadores">{num}</li>
          </ul>
        </div>
      );
    }