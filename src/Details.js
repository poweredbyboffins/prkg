import React, { Component } from 'react';
import * as d3 from 'd3';
//import './App.css';
//import * as js from './jsondata.json'
//import * as jsondata from './jsondata'
//var jsondata=require('/home/andy/rr/consuming-rest/src/details.json');
var jsondata=require('./asia.json');

class Details extends React.Component {
constructor(props){
      super(props)
      //this.createGraph = this.createGraph(this);
      this.myRef = React.createRef();
   }

//    static propTypes = {...}

    componentDidMount() {
       this.createGraph()
    }
    componentDidUpdate() {
       this.createGraph(this.myRef)
    }
    componentWillMount() {
       //this.createGraph(this.myRef)
    }
    createGraph() {
        // D3 Code to create the chart
        // using this._rootNode as container

var svg = d3.select(this.refs.svgref),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory10);


var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().distance(400).id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));


var graph=JSON.parse(JSON.stringify(jsondata));

var link = svg.append("g")
    .attr("class", "links")
    .selectAll("path")
    .data(graph.links)
    .enter().append("path")
    .attr("id",function (d) {return  d.value;})
   //   .text(function(d) { return Math.sqrt(d.value); })
   ;

link.attr("stroke",function (d) { return color(d.value); })
.attr("stroke-width", function(d) { return d.value; })
;

var textPaths = svg.append("g")
                   .attr('id', 'textPaths')
                  
   .selectAll("#textPaths") 
   .data(graph.links)
    .enter().append("text")
   .attr("x",6)
   .attr("y",3)
   .attr("dy", -10)
  .attr("dx", -45)
    .append("textPath")
    
    //.enter().append("g")
    
    
    .attr("class", "textpath tp_avg")
    .attr('fill', '#018291')
    .attr("startOffset","55.76%")
    .style("text-anchor","end")
    .attr("xlink:href", function (d) {return "#" + d.value;})
    .text(function(d){ return d.label; }) 
    ;
;

/*
var path=svg.append("g").append("text").append("textPath")
           .data(graph.links)
           .attr("xlink:href", function (d) {return "#" + d.value;})
           .text(function(d) { return d.value; });
*/
    var node=svg.append("g")
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    
  var circles = node.append("circle")
      .attr("r", function(d) { return (d.size); })
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));


  var lables = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr('x', 6)
      .attr('y', 3);

 var ttip = node.append("div")
          .text(function(d) {
           return d.size;
           })
           .attr("class", "tooltip");				
          // .style("opacity", 0);

/* var tips = node.append("circle").on("mouseover", function(){return tooltip.style("visibility", "visible");})
  .on("mousemove", function(){return tooltip.style("top", (event.pageY-800)+"px").style("left",(event.pageX-800)+"px");})
  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
*/

  node.append("title")
      .text(function(d) { return d.id+'\n GDP: Change'+d.size +'\n'+' Imports: -5%'+'\n'+' Exports: 3%'});

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("d",function(d) { return 'M'+d.source.x+','+d.source.y+','+d.target.x + ','+ d.target.y; }

        )
        
   
        
        /*.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
        */

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }
//});


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

    
/*function handleHover ()
{
//function handleHover {
console.log("mouse over");
 d3.select("circle").on("mouseover", function(){return ttip.style("visibility", "visible");})
  //.on("mousemove", function(){return ttip.style("top", (event.pageY-800)+"px").style("left",(event.pageX-800)+"px");})
  .on("mouseout", function(){return ttip.style("visibility", "hidden");});
}
*/

    }
//function handleClick = () => {
//console.log("mouse click");
//}

    
/*    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }
*/

    render() {
return (
<div onMouseOver={this.handleHover}>
<svg ref="svgref" width="1400" height="900"> <title></title> </svg>
</div>
    )
   }
}

export default Details;
