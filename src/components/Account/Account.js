import React from 'react';
import { postMoney } from '../../api/post';
import TokenComponent from '../../api/TokenComponent';
import { Link } from "react-router-dom";
function Account() {

   
    const [form, setForm] = React.useState({
        id: TokenComponent.getUserId(),
        money: '',
    });
    const [stocks, setStocks] = React.useState([]);


    const name = TokenComponent.getUserId();

    const handleSubmit = async (e) => {
        e.preventDefault();
        postMoney(form, "/payAdd", 'post');
        
        window.location.reload();
    }


    React.useEffect(() => {
        
        postMoney({"id":TokenComponent.getUserId()}, "/getMember", 'post').then((result) => {
            console.log(result);
            setStocks(result[0].stocks);
         })
    }, [])

    React.useEffect(() => {

    }, [])

    const handleChange = (event) => {
        event.persist();
        console.log(form);
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    };

    return (
        <div className="Account">
            <h4>{name}</h4>
            <label> Add money $ </label>
                    <form>
                        
                        <input type="text" id="money" onChange={handleChange} class="fadeIn second" name="money" placeholder="100" />
                         <input type="submit" onClick={handleSubmit} class="fadeIn fourth" value="Submit" />
                    </form>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Stocks</th>
                        <th scope="col">Shares</th>

                    </tr>
                </thead>
                <tbody>
                    {stocks ? stocks.map((element) => {
                        
                        console.log(stocks[0].stocks);
                        return <React.Fragment>
                            <tr>
                                
                                <Link to={"/graph/" + element.name}><th scope="row">{element.name}</th></Link>
                                <th>{element.amount}</th>
                            </tr> 
                            
                        </React.Fragment> 
                        
                    }) : null}
                    

                </tbody>
            </table>

              
        </div>
    );
}

export default Account;
