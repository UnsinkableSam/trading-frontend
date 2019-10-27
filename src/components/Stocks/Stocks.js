import React from 'react';
import "./Stocks.css";
import { Link } from "react-router-dom";
import { postMoney } from '../../api/post';
function Stocks() {

    const [stocks, setStocks] = React.useState([]);
    const handleRequest = async () => {
        await postMoney("hej", '/stocks', 'post').then((result) => {
            console.log(result);
            setStocks(result);
        });
    };

    React.useEffect(() => {
        handleRequest();
        console.log("hello");
    }, [])
    return (
        
        <div className="Stocks">
            
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Stocks</th>

                    </tr>
                </thead>
                <tbody>
                    {stocks.map((element) => {
                        return <tr>
                            <Link to={"/graph/" +  element.name }   ><th scope="row">{element.name}</th></Link> 
                          
                        </tr>
                    })}
                    
                   
                </tbody>
            </table>
        </div>
    );
}

export default Stocks;
