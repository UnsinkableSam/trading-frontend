import React from 'react';


import io from 'socket.io-client';
import './graph.css';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import TokenComponent from '../../api/TokenComponent';
import { post } from '../../api/post';
import { postMoney } from '../../api/post';
// import { Redirect } from 'react-router/cjs/react-router.min';



// eslint-disable-next-line
let socket = io.connect("https://trading-backend.sam-corp.me/");

function Graph(props) {
    const [stock, setStock] = React.useState([]);
    const { name } = props.match.params;
    const [form, setForm] = React.useState({
        id: "",
        stock: '',
        cost: stock.length ? stock[stock.lenght - 1] : {},
        amount: '',
        sell: ''
    });
    const [moneyApi, setMoneyApi] = React.useState("");
    const [stocks, setStocks] = React.useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();  
        
        if (moneyApi > (form.amount * form.cost) && parseInt(form.amount) > 0) {
            post(form, '/stock', 'post')
            setForm(form => ({ ...form, "amount": 0 }));
            getCurrentMoney();
            sharesUpdate();
        } 
        
        
    }
    
    const handleSell = async (e) => {
        e.preventDefault();
        
        if (stocks >= form.sell && form.sell > 0) {
            console.log("minus");
            post(form, '/sell', 'post')



            setForm(form => ({ ...form, "sell": 0 }));
            getCurrentMoney();
            sharesUpdate();
        } 
            

    }

    const handleChange = (event) => {
        event.persist();
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
        
    };

    
    
    const sharesUpdate = () => {
        postMoney({ "id": TokenComponent.getUserId() }, "/getMember", 'post').then((result) => {
            console.log(result);
            // setStocks(result[0].stocks);
            if (result[0].stocks) {
                result[0].stocks.forEach((res) => {
                    if (res.name === name) {
                        setStocks(res.amount);
                    }
                })
            }
            
        })
    }
    
    const getCurrentMoney = () => {
        postMoney({ "id": TokenComponent.getUserId() }, '/money', 'post').then((result) => {
            setMoneyApi(result[0].money);
        });
    }
    

    React.useEffect((messages)  => {
        // getCurrentMoney();
        // sharesUpdate();

        let socket = io.connect("https://trading-backend.sam-corp.me/");
 
        socket.on('connect', () => {
        
        console.log("Connected");
        socket.on('stocks', (message) => {
            message.forEach(element => {
                if (name === element.name) {
                    let msg = { name: element.time, price: element.startingPoint };
                    setStock(stock => ([...stock, msg]));
                    
                    setForm(form => ({ ...form, "stock": element.name }));
                    setForm(form => ({ ...form, "cost": element.startingPoint }));
                    setForm(form => ({ ...form, "id": TokenComponent.getUserId() }));
                } 
                
            });
            
        });
    });
        
    
    }, [name])
    
   React.useEffect(() => {
    //    getCurrentMoney();
    //    sharesUpdate();
       
   }, [stock])


    
    
        getCurrentMoney();
       sharesUpdate();
    
    return (
        <div>
            
            <h1 className="Name"> {name} </h1>
            <h4>Account Money {moneyApi}</h4>
            <h4> Current shares owned {stocks}</h4>
            <div className="graphDiv">
            <LineChart width={600} height={200} data={stock}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line connectNulls={true} type='monotone' dataKey='price' stroke='#8884d8' fill='#8884d8' />
            </LineChart>
            </div>
            <div className="buysellButtons">
                <form>
                    <p >Need enough money and can't be "-1"</p>
                    <input type="number" id="amount" onChange={handleChange} value={form.amount} class="fadeIn second" name="amount" placeholder="Amount" />
                    <input type="submit" onClick={handleSubmit} class="fadeIn fourth" value="Buy" />
                </form>
                <form>
                    <p >Need enough stock money and can't be "-1"</p>
                    <input type="number" id="sell" onChange={handleChange} value={form.sell} class="fadeIn second" name="sell" placeholder="Sell amount" />
                    <input type="submit" onClick={handleSell} class="fadeIn fourth" value="Sell" />
                </form>

            </div>
            
        </div>
    );
    
}

export default Graph;
