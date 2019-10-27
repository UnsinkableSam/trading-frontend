import React from 'react';


import io from 'socket.io-client';
import Rickshaw from 'rickshaw';
import 'rickshaw/rickshaw.min.css';
import './graph.css';
let socket = io.connect("http://localhost:3000");

function Graph() {
    let stock = [];
    

    socket.on('disconnect', () => {
        console.log("Disconnected");
    });
    
    
    React.useEffect((messages) => {
        
        let socket = io.connect("http://localhost:8333");
        socket.on('connect', () => {
        console.log("Connected");
        socket.on('stocks', (message) => {
            console.log(message);
            stock.push(message[0]);
            graphCreate(stock);

        });
    });
        
        
    }, [])
    const graphCreate = (stock) => {
        var graph = new Rickshaw.Graph({
            element: document.querySelector("#chart"),
            width: 540,
            height: 240,
            series: [{
                data: stock,
                color: 'steelblue',
                name:"hello"
            }]
        });

        var x_axis = new Rickshaw.Graph.Axis.Time({ graph: graph });

        var y_axis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'left',
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
            element: document.getElementById('y_axis'),
        });

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });


        graph.render();


    }
    

    
    return (
        
       
       
            <div id="chart_container">
                <div id="y_axis"></div>
                <div id="chart"></div>
            </div>


        




        
             
    );
    
}

export default Graph;
