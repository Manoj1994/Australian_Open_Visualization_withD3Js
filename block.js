var w = 500;
var h = 500;
var marginLeft = 30;
var marginRight = 10;
var marginTop = 40;
var marginBottom = 20;

var xScale = d3.scale.linear().range([5,w - marginRight - marginLeft]);

var yScale = d3.scale.ordinal().rangeRoundBands([marginTop, h - marginBottom], 0.4);

var xAxis = d3.svg.axis().scale(xScale).orient("bottom");

var yAxis = d3.svg.axis().scale(yScale).orient("left");

var graph1 = d3.select("#block5")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span style='color:red'>" + d.winner1 + "</span>";
})

graph1.call(tip);

document.getElementById("aces").onclick = function() {
        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.ace1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, ace1 : metrics1[i].values.avg1};
        }

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.ace1;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
              console.log(xScale(d.ace1));
                return xScale(d.ace1);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcAces)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(1000)
            .call(yAxis);

}

document.getElementById("totalPoints").onclick = function() {
        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.total1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, value : metrics1[i].values.avg1};
        }
        console.log(dataset1);

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.value;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        //var graph2 = d3.select("#block5").select("svg").transition();
        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
                return xScale(d.value);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcTotalPoints)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(1000)
            .call(yAxis);

}

document.getElementById("firstServe").onclick = function() {
        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.avgFirstServe1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, value : metrics1[i].values.avg1};
        }
        console.log(dataset1);

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.value;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        //var graph2 = d3.select("#block5").select("svg").transition();
        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
              console.log(xScale(d.value));
                return xScale(d.value);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcFirstServe)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(1000)
            .call(yAxis);

}

document.getElementById("secondServe").onclick = function() {
        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.avgSecServe1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, value : metrics1[i].values.avg1};
        }
        console.log(dataset1);

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.value;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        //var graph2 = d3.select("#block5").select("svg").transition();
        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
                return xScale(d.value);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcSecondServe)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(1000)
            .call(yAxis);

}

document.getElementById("errors").onclick = function() {
        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.error1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, value : metrics1[i].values.avg1};
        }
        console.log(dataset1);

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.value;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        //var graph2 = d3.select("#block5").select("svg").transition();
        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
                return xScale(d.value);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcError)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(1000)
            .call(yAxis);

}

var players2 = []

document.getElementById("winners").onclick = function() {
  d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
        players2 = data.filter(function(d){return d.winner == "Andy Murray"
        || d.winner == "Rafael Nadal" || d.winner == "Roger Federer" || d.winner == "Novak Djokovic" || d.winner == "Juan Martin Del Potro"
        || d.winner == "Stanislas Wawrinka" || d.winner == "Marin Cilic" || d.winner == "David Ferrer" || d.winner == "Lleyton Hewitt" ||
        d.winner == "Sam Querrey" || d.winner == "Kevin Anderson" || d.winner == "Jo-Wilfried Tsonga" || d.winner == "Lleyton Hewitt" || d.winner == "Andy Roddick" ||
        d.winner == "Tomas Berdych" || d.winner == "Tomas Berdych" || d.winner == "Tomas Berdych"
        ;});

        metrics1 = d3.nest()
        .key(function(d) { return d.winner; })
        .rollup(function(v) { return {
        avg1: Math.ceil(d3.mean(v, function(d) { return d.winner1; })),
        avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
        }; })
        .entries(players2);
        dataset1 = [];
        for (var i=0; i < metrics1.length; i++) {
          dataset1[i] = { winner : metrics1[i].key, ace1 : metrics1[i].values.avg1};
        }

        xScale.domain([
          0,

          d3.max(dataset1, function(d) {
          return d.ace1;
        }) ]);

        yScale.domain(dataset1.map(function(d) { return d.winner; } ));

        //var graph2 = d3.select("#block5").select("svg").transition();
        graph1.selectAll("rect")
            .remove();
        var rects1 = graph1.selectAll("rect")
            .data(dataset1)
            .enter()
            .append("rect")
            .attr("x", marginLeft + 70)
            .attr("y", function(d, i) {
                return yScale(d.winner);
              })
            .attr("width", function(d) {
                return xScale(d.ace1);
              })
            .attr("height",yScale.rangeBand)
            .attr("class", "barBase")
            .on("click", funcWinner)
            .transition()
            .duration(1000);

            graph1.select(".x.axis")
                .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
                .transition()
                .duration(1000)
                .call(xAxis);

           graph1.select(".y.axis")
            .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
            .transition()
            .duration(100)
            .call(yAxis);

      });
}
var players = [];

d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
      players = data.filter(function(d){return d.winner == "Andy Murray"
      || d.winner == "Rafael Nadal" || d.winner == "Roger Federer" || d.winner == "Novak Djokovic" || d.winner == "Juan Martin Del Potro"
      || d.winner == "Stanislas Wawrinka" || d.winner == "Marin Cilic" || d.winner == "David Ferrer" || d.winner == "Lleyton Hewitt" ||
      d.winner == "Sam Querrey" || d.winner == "Kevin Anderson" || d.winner == "Jo-Wilfried Tsonga" || d.winner == "Lleyton Hewitt" || d.winner == "Andy Roddick" ||
      d.winner == "Tomas Berdych" || d.winner == "Tomas Berdych" || d.winner == "Tomas Berdych" || d.winner == "Richard Gasquet"
      ;});
      dataset = [];
      metrics = d3.nest()
      .key(function(d) { return d.winner; })
      .rollup(function(v) { return {
      avg1: Math.ceil(d3.mean(v, function(d) { return d.winner1; })),
      avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
      }; })
      .entries(players);

      for (var i=0; i < metrics.length; i++) {
        dataset[i] = { winner : metrics[i].key, winner1 : metrics[i].values.avg1};
      }

      xScale.domain([
         0,

      	d3.max(dataset, function(d) {
        return d.winner1;
      }) ]);

      yScale.domain(dataset.map(function(d) { return d.winner; } ));

      graph1.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(" + (marginLeft + 65) + "," + (h - marginTop + 20) + ")")
          .call(xAxis);

      graph1.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (marginLeft + 65)  +  ",0)")
      .call(yAxis)
      .append("text")
	    .attr("x", marginLeft - 65)
      .attr("y", marginTop - 5)
    	.style("font-size", "12")
      .text("Individual player statistics (who won)");

        var rects = graph1.selectAll("rect")
   					.data(dataset)
   					.enter()
   					.append("rect");

       rects.attr("x", marginLeft + 70)
   	    .attr("y", function(d, i) {
   	        return yScale(d.winner);
   	      })
   	    .attr("width", function(d) {
   	        return xScale(d.winner1);
   	      })
   	    .attr("height",yScale.rangeBand)
   	    .attr("class", "barBase")

        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .on("click", funcWinner)
        .transition()
        .duration(1000);
        ;


});

var width = 600;
var height = 500;

var margin2Left = 30;
var margin2Right = 10;
var margin2Top = 40;
var margin2Bottom = 20;

var xScaleLine = d3.scale.linear()
               .range([5,width - margin2Right - margin2Left]);

var yScaleLine = d3.scale.ordinal()
               .rangeRoundBands([margin2Top, height - margin2Bottom],0.2);

var xAxisLine = d3.svg.axis()
             .scale(xScaleLine)
             .orient("bottom");

var yAxisLine = d3.svg.axis()
             .scale(yScaleLine)
             .orient("left");

var graph2 = d3.select("#block4")
			.append("svg")
			.attr("width", width)
			.attr("height", height);

var tip1 = d3.tip()
 .attr('class', 'd3-tip')
 .offset([-10, 0])
 .html(function(d) {
   return "<span style='color:red'>" + d.winner1 + "</span>";
})

graph2.call(tip1);

d3.csv("10yearAUSOpenMatches.csv", function(error, data) {

     dataset2 = [];
     metrics = d3.nest()
     .key(function(d) { return d.round; })
     .rollup(function(v) { return {
     avg1: Math.ceil(d3.mean(v, function(d) { return d.winner1; })),
     avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
     }; })
     .entries(data);

     for (var i=0; i < metrics.length; i++) {
       dataset2[i] = { round : metrics[i].key, winner1 : metrics[i].values.avg1};
     }

     xScaleLine.domain([
       0,

     	d3.max(dataset2, function(d) {
       return d.winner1;
     }) ]);

     yScaleLine.domain(dataset2.map(function(d) { return d.round; } ));

     graph2.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(" + (margin2Left + 65) + "," + (h - margin2Top + 20) + ")")
         .call(xAxisLine);

     graph2.append("g")
     .attr("class", "y axis")
     .attr("transform", "translate(" + (margin2Left + 65)  +  ",0)")
     .call(yAxisLine)
     .append("text")
	  .attr("x", margin2Left - 65)
      .attr("y", margin2Top - 5)
   	  .style("font-size", "14")
      .text("Individual player statistics in all rounds of australian open (who won)");

       var rects = graph2.selectAll("rect")
  					.data(dataset2)
  					.enter()
  					.append("rect");

      rects.attr("x", margin2Left + 70)
  	    .attr("y", function(d, i) {
  	        return yScaleLine(d.round);
  	      })
  	    .attr("width", function(d) {
  	        return xScaleLine(d.winner1);
  	      })
  	    .attr("height",yScaleLine.rangeBand)
  	    .attr("class", "barBase")
       .on('mouseover', tip1.show)
       .on('mouseout', tip1.hide)
       .transition()
       .duration(1000);


});

function funcWinner(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.winner1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, winner1 : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.winner1;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.winner1);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
          ;
       });
}

function funcAces(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.ace1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, value : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.value;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.value);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
       });
}

function funcTotalPoints(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.total1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, value : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.value;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.value);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
       });
}

function funcFirstServe(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.avgFirstServe1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, value : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.value;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.value);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
       });
}

function funcSecondServe(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.avgSecServe1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, value : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.value;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.value);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
       });
}

function funcError(d) {
    var filterPlayer = d.winner;
    var plot2FilteringWithPlayer = [];
    d3.csv("10yearAUSOpenMatches.csv", function(error, data) {
         var playersdataset2 = [];
         plot2FilteringWithPlayer = data.filter(function(d){return d.winner == filterPlayer});
         playersdataset21 = d3.nest()
         .key(function(d) { return d.round; })
         .rollup(function(v) { return {
         avg1: Math.ceil(d3.mean(v, function(d) { return d.error1; })),
         avg2: Math.ceil(d3.mean(v, function(d) { return d.ace1;}))
         }; })
         .entries(plot2FilteringWithPlayer);

         for (var i=0; i < playersdataset21.length; i++) {
           playersdataset2[i] = { round : playersdataset21[i].key, value : playersdataset21[i].values.avg1};
         }

         xScaleLine.domain([
           0,
         	d3.max(playersdataset2, function(d) {
           return d.value;
         }) ]);

         yScaleLine.domain(playersdataset2.map(function(d) { return d.round; } ));

         graph2.selectAll("rect")
             .remove();
         var rects = graph2.selectAll("rect")
          .data(playersdataset2);

          graph2.select(".x.axis")
               .transition()
               .duration(1000)
               .call(xAxisLine);
          graph2.select(".y.axis")
              .transition()
              .duration(1000)
              .call(yAxisLine);

         rects.enter().append("rect")
         .transition()
         .duration(1000)
              .attr("x", margin2Left + 70)
          .attr("y", function(d, i) {
            //console.log(yScaleLine(d.round));
              return yScaleLine(d.round);
            })
          .attr("width", function(d) {
            //  console.log(xScaleLine(d.winner1));
              return xScaleLine(d.value);
            })
          .attr("height",yScaleLine.rangeBand)
          .attr("class", "barBase")
       });
}


if(list.size() > k) {
            return;
        }
        if(target < 0) {
            return;
        }else if(target == 0 && list.size() == k) {
            output.add(new ArrayList<Integer>(list));
        } else {
            for(int i=start;i< candidates.length;i++) {
                list.add(candidates[i]);
                backtrack(candidates, output, list, target - candidates[i], k, i+1);
                list.remove(list.size()-1);
            }
        }
