
  $(document).ready(function(){
   $("#logo").hover(function(){
      $("#logo img").animate({top: "-10px"}, 250).animate({top: "0px"}, 250);

   });
    
  });

      $(function(){
        $("[data-toggle=tooltip]").tooltip({
          placement: 'bottom'

          });
     
      });

///////////////////////////////// D3 Chart /////////////////////////////////


	///////////////////////////////// Software Proficiencies
	                      
	// Dimension of the chart canvas
	var margin1 = 20,
		w1 = parseInt(d3.select("#softwareProficienciesChart_container").style("width")) - margin1*7,
		h1 = 200 - margin1*4;
	  
	// Chart (the area to present the graph *exclude the area of x and y axis)
	var graph1 = d3.select("#softwareProficienciesChart")
				   .append("g")
				   .attr("width", w1)
				   .attr("height", h1)
				   .attr("transform", "translate(" + margin1*5 + "," + margin1 + ")");
					
	// X Scales 
	var xScale1 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// X Axis
	var xAxis1 = d3.svg.axis()
					   .scale(xScale1)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });
	// Add X Axis
	graph1.append("g")
		  .attr("transform", "translate(0," + margin1*7.5 + ")")
		  .attr("class", "softwareXaxis")
		  .call(xAxis1);

	// Remove tickmarks except "beginner", "intermediate", "advanced"
	graph1.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Create Dataset Array
	var softwareProficiencies = [5, 4, 3, 3, 2];

	// Variables to bind above dataset for line chart
	var softwareChart1 = graph1.append("g") 
							  .selectAll("rect")
							  .data(softwareProficiencies);

	// Add linechart
	softwareChart1.enter()
				 .append("rect")
				 .attr("class", "softwareChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")
				 .attr("width", 0)
				 .transition()
	             .duration(2000)
	             .delay(function(d,i){
	             	return i * 200;
	             })
				 .attr("width", function(d, i){
									  	       return xScale1(d);
									          });


	// Variables to bind above dataset for circles
	var softwareChart2 = graph1.append("g") 
							  .selectAll("circle")
							  .data(softwareProficiencies);

	// set delay on circles
	setTimeout(function(){  

	softwareChart2.enter()
				 .append("circle")
				 .attr("class", "softwareEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale1(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
				 .attr("r", 0)
				 .transition()
	             .delay(function(d,i){
	             	return i * 200;
	             })
	             .attr("r", 5)
	}, 1800);

	// Add labels
	softwareChart1.enter()
				 .append("text")
				 .attr("x", "-100px")
	             .attr("transform", "translate(" + 0 + "," + 5 + ")")
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .text(function(d,i){
								     return ['Illustrator', 'InDesign', 'Photoshop', 'ArcGIS', 'R'][i];
									 })
				 .attr("class", "softwareLabels");

	// Add custom x axis
	graph1.append("rect")
		  .attr("width", w1)
		  .attr("height", "1px")
		  .attr("transform", "translate(0," + margin1*7.5 + ")")
		  .attr("class", "softwareXline");



	///////////////////////////////// Programming Skills
	                      
	// Dimension of the chart canvas
	var margin2 = 20,
		w2 = parseInt(d3.select("#programmingSkillsChart_container").style("width")) - margin2*7,
		h2 = 280 - margin1*4;
	  
	// Chart (the area to present the graph *exclude the area of x and y axis)
	var graph2 = d3.select("#programmingSkillsChartChart")
				   .append("g")
				   .attr("width", w2)
				   .attr("height", h2)
				   .attr("transform", "translate(" + margin2*5 + "," + margin2 + ")");
					
	// X Scales 
	var xScale2 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// X Axis
	var xAxis2 = d3.svg.axis()
					   .scale(xScale2)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });
	// Add X Axis
	graph2.append("g")
		  .attr("transform", "translate(0," + margin1*12 + ")")
		  .attr("class", "programmingXaxis")
		  .call(xAxis2);

	// Remove tickmarks except "beginner", "intermediate", "advanced"
	graph2.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Create Dataset Array
	var programmingSkills = [4, 4, 3, 3, 3, 3, 3, 1];

	// Variables to bind above dataset for line chart
	var programmingChart1 = graph2.append("g") 
							  .selectAll("rect")
							  .data(programmingSkills);

	// Add linechart
	programmingChart1.enter()
				 .append("rect")
				 .attr("class", "programmingChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")
				 .attr("width", 0)
				 .transition()
	             .duration(2000)
	             .delay(function(d,i){
	             	return i * 200;
	             })
				 .attr("width", function(d, i){
									  	       return xScale2(d);
									          });


	// Variables to bind above dataset for circles
	var programmingChart2 = graph2.append("g") 
							  .selectAll("circle")
							  .data(programmingSkills);

	// set delay on circles
	setTimeout(function(){  

	programmingChart2.enter()
				 .append("circle")
				 .attr("class", "programmingEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale2(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
				 .attr("r", 0)
				 .transition()
	             .delay(function(d,i){
	             	return i * 200;
	             })
	             .attr("r", 5)
	}, 1800);

	// Add labels
	programmingChart1.enter()
				 .append("text")
				 .attr("x", "-100px")
	             .attr("transform", "translate(" + 0 + "," + 5 + ")")
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .text(function(d,i){
								     return ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Bootstrap', 'D3', 'Leaflet', 'PHP / MySQL'][i];
									 })
				 .attr("class", "programmingLabels");

	// Add custom x axis
	graph2.append("rect")
		  .attr("width", w2)
		  .attr("height", "1px")
		  .attr("transform", "translate(0," + margin1*12 + ")")
		  .attr("class", "programmingXline");


    ///////////////////////////////// Language Skills
	                      
	// Dimension of the chart canvas
	var margin3 = 20,
		w3 = parseInt(d3.select("#languageSkillsChart_container").style("width")) - margin3*7,
		h3 = 140 - margin1*4;
	  
	// Chart (the area to present the graph *exclude the area of x and y axis)
	var graph3 = d3.select("#languageSkillsChartChart")
				   .append("g")
				   .attr("width", w3)
				   .attr("height", h3)
				   .attr("transform", "translate(" + margin3*4.5 + "," + margin3 + ")");
					
	// X Scales 
	var xScale3 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// X Axis
	var xAxis3 = d3.svg.axis()
					   .scale(xScale3)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });
	// Add X Axis
	graph3.append("g")
		  .attr("transform", "translate(0," + margin1*4.5 + ")")
		  .attr("class", "languageXaxis")
		  .call(xAxis3);

	// Remove tickmarks except "beginner", "intermediate", "advanced"
	graph3.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Create Dataset Array
	var languageSkills = [5, 4, 2];

	// Variables to bind above dataset for line chart
	var languageChart1 = graph3.append("g") 
							  .selectAll("rect")
							  .data(languageSkills);

	// Add linechart
	languageChart1.enter()
				 .append("rect")
				 .attr("class", "languageChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")
				 .attr("width", 0)
				 .transition()
	             .duration(2000)
	             .delay(function(d,i){
	             	return i * 200;
	             })
				 .attr("width", function(d, i){
									  	       return xScale2(d);
									          });


	// Variables to bind above dataset for circles
	var languageChart2 = graph3.append("g") 
							  .selectAll("circle")
							  .data(languageSkills);

	// set delay on circles
	setTimeout(function(){  

	languageChart2.enter()
				 .append("circle")
				 .attr("class", "languageEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale3(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
				 .attr("r", 0)
				 .transition()
	             .delay(function(d,i){
	             	return i * 200;
	             })
	             .attr("r", 5)
	}, 1800);

	// Add labels
	languageChart1.enter()
				 .append("text")
				 .attr("x", "-88px")
	             .attr("transform", "translate(" + 0 + "," + 5 + ")")
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .text(function(d,i){
								     return ['Japanese', 'English', 'Chinese'][i];
									 })
				 .attr("class", "languageLabels");

	// Add custom x axis
	graph3.append("rect")
		  .attr("width", w3)
		  .attr("height", "1px")
		  .attr("transform", "translate(0," + margin1*4.5 + ")")
		  .attr("class", "languageXline");


	///////////////////////////////// Work / Education

	var skillsHeight = $("#skillsContentHeight").height();
	// console.log(skillsHeight);

	$("#workEduChart").css("height", skillsHeight);
	                      
	// Dimension of the chart canvas
	var margin4 = 20,
		w4 = parseInt(d3.select("#workEduChart_container").style("width")) - margin4*7,
		h4 = skillsHeight - margin4/2;
	  
	// Chart (the area to present the graph *exclude the area of x and y axis)
	var graph4 = d3.select("#workEduChart")
				   .append("g")
				   .attr("width", w4)
				   .attr("height", h4)
				   .attr("transform", "translate(" + 140 + "," + 10 + ")");
					
	var yScale4 = d3.scale.linear()
						  .domain([0, 137]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([h4, 0]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
	
	var yScale5 = d3.scale.linear()
						  .domain([0, 137]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, h4]);	

	// X Axis
	var yAxis4 = d3.svg.axis()
					   .scale(yScale4)
				       .orient("right")
				       .ticks(137)
					   .tickFormat(function (d, i) { if (i == 49){
													  	return "B.A. at KANSAI GAIDAI"
												    } else if (i == 53) {
													  	return "Mar. 2003—Sep. 2007"
												    } else if (i == 63) {
													  	return "Export Sales at Icom Inc."
													} else if (i == 67) {
														return "Oct. 2007—Dec. 2009"
													} else if (i == 91) {
														return "at BE-S CO., LTD."
													} else if (i == 94) {
														return "Product Development"
													} else if (i == 98) {
														return "Jan. 2009—Jul. 2011"
													} else if (i == 123){
														return "at San Francisco State"
													} else if (i == 126){
														return "M.A. Industrial Arts"
													} else if (i == 130){
														return "Sep. 2011—May 2014"
													} else if (i == 134){
														return "Intern at MTC"
													} else if (i == 137){
														return "Jun. 2014—Present"
													}
												    });

	graph4.append("g")
		  .attr("transform", "translate(-148," + 0 + ")")
		  .attr("class", "workEduYaxis")
		  .call(yAxis4)
		  .attr("class", "tickmarks");

	graph4.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d != 49 && d != 53 &&  d != 63 &&  d != 67 && d != 91 && d != 94 && d != 98 && d!= 123 && d!= 126 && d != 130 && d != 134 && d != 137) {
	            this.remove();
	        }
	    });

    d3.json("js/data/resumeWorkEdu_main.json", function(error, data){
    	
	var workEdu_main = graph4.append("g")
								  .selectAll("rect")
							      .data(data);
	

	// Add Timeline chart
	
	 workEdu_main.enter()
				 .append("rect")
				 .attr("class", "kansaigaidai")
				 .attr("x", 18)
				 .attr("y", yScale4(0))
				 .attr("height", 0)
				 .attr("width", 20)
				 .transition()
				 .duration(1500)
				 .attr("y", yScale4(data[0]["end"]))
                 .attr("height", yScale5(data[0]["end"]-data[0]["start"]));
				 
		 
	  $(".kansaigaidai").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[0]["title"] + "</strong><br/>" + "<p>" + data[0]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {


												
										$("#info").hide().html("");
									});
    
    setTimeout(function(){  
    workEdu_main.enter()
				 .append("rect")
				 .attr("class", "Icom")
				 .attr("x", 18)
				 .attr("y", yScale4(53))
				 .attr("height", 0)
				 .attr("width", 20)
				 .transition()
				 .duration(1000)
				 .attr("y", yScale4(data[1]["end"]))
				 .attr("height", yScale5(data[1]["end"]-data[1]["start"]));

	$(".Icom").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[1]["title"] + "</strong><br/>" + "<p>" + data[1]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});
				 			
		}, 1250);

      
        
        setTimeout(function(){  
	    workEdu_main.enter()
				 .append("rect")
				 .attr("class", "be-s")
				 .attr("x", 18)
                 .attr("y", yScale4(67))
                 .attr("height", 0)
                 .attr("width", 20)
				 .transition()
				 .duration(1200)
				 .attr("y", yScale4(data[2]["end"]))
				 .attr("height", yScale5(data[2]["end"]-data[2]["start"]));

			$(".be-s").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[2]["title"] + "</strong><br/>" + "<p>" + data[2]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});
				 
				 
		}, 2000);

        setTimeout(function(){ 
		 workEdu_main.enter()
				 .append("rect")
				 .attr("class", "sfState")
				 .attr("x", 18)
                 .attr("y", yScale4(98))
                 .attr("height", 0)
                 .attr("width", 20)
				 .transition()
				 .duration(1300)
				 .attr("y", yScale4(data[3]["end"]))
				 .attr("height", yScale5(data[3]["end"]-data[3]["start"]));

		$(".sfState").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[3]["title"] + "</strong><br/>" + "<p>" + data[3]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});
				 
				 
		}, 3000);

        setTimeout(function(){
		 workEdu_main.enter()
				 .append("rect")
				 .attr("class", "MTC")
				 .attr("x", 18)
                 .attr("y", yScale4(130))
                 .attr("height", 0)
                 .attr("width", 20)
				 .transition()
				 .duration(1000)
				 .attr("y", yScale4(data[4]["end"]))
				 .attr("height", yScale5(data[4]["end"]-data[4]["start"]));

		$(".MTC").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[4]["title"] + "</strong><br/>" + "<p>" + data[4]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});
				 
				 
		}, 4000);


    });


    d3.json("js/data/resumeWorkEdu_sub.json", function(error, data){

	var workEdu_sub = graph4.append("g")
								  .selectAll("rect")
							  .data(data);

		workEdu_sub.enter()
				 .append("rect")
				 .attr("class", "shanghai")
				 .attr("x", 38)
				 .attr("y", yScale4(0))
				 .attr("width", 10)
				 .transition()
				 .duration(1500)
				 .attr("y", yScale4(data[0]["end"]))
                 .attr("height", yScale5(6));

        $(".shanghai").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[0]["title"] + "</strong><br/>" + "<p>" + data[0]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});	


       workEdu_sub.enter()
				 .append("rect")
				 .attr("class", "chico")
				 .attr("x", 38)
                 .attr("y", yScale4(0))
                 .attr("width", 10)
				 .transition()
				 .duration(1300)
				 .attr("y", yScale4(data[1]["end"]))
				 .attr("height", yScale5(9));

		$(".chico").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[1]["title"] + "</strong><br/>" + "<p>" + data[1]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});		

				 
				
        setTimeout(function(){
	    workEdu_sub.enter()
				 .append("rect")
				 .attr("class", "sfBike")
				 .attr("x", 38)
                 .attr("y", yScale4(98))
                 .attr("height", 0)
                 .attr("width", 8)
				 .transition()
				 .duration(1250)
				 .attr("y", yScale4(data[2]["end"]))
				 .attr("height", yScale5(14));

		$(".sfBike").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[2]["title"] + "</strong><br/>" + "<p>" + data[2]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});		 
	   

		 workEdu_sub.enter()
				 .append("rect")
				 .attr("class", "TA")
				 .attr("x", 46)
                 .attr("y", yScale4(98))
                 .attr("height", 0)
                 .attr("width", 8)
				 .transition()
				 .duration(1300)
				 .attr("y", yScale4(data[3]["end"]))
				 .attr("height", yScale5(4));

		$(".TA").hover(function() {
					 									  	  
										var text = "<p><span class='tooltipTitle'>" + data[3]["title"] + "</strong><br/>" + "<p>" + data[3]["description"] + "</p>";
										$("#info").show().html(text);
									}, function() {
												
										$("#info").hide().html("");
									});	
				
				 
	
				  // Sakura nezumi
		}, 3000);

		

		

		});




								
							
	// Resize function to make d3 charts responsive
	function resize() {

    ///////////////////////////////// Software Proficiences resize
	// Resize dimension of the chart canvas		 
	w1 = parseInt(d3.select("#softwareProficienciesChart_container").style("width")) - margin1*7,
	h1 = 200 - margin1*4;
		
	// resize X Scales 
	var xScale1 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// resize X Axis
	var xAxis1 = d3.svg.axis()
					   .scale(xScale1)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });

	// Resize canvas size
	graph1.attr("width", w1)
		  .attr("height", h1);
		
	// Resize x axis
	graph1.select('.softwareXaxis')
		  .attr("transform", "translate(0," + margin1*7.5 + ")")
		  .call(xAxis1);

	// Resize custom tick marks
	graph1.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Resize chart lines
	graph1.selectAll(".softwareChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")		
				 .attr("width", function(d, i){
									  	       return xScale1(d);
									          });
	// Resize circles
	graph1.selectAll(".softwareEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale1(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
	             .attr("r", 5);	

	// Resize custom x axis 								
	graph1.select(".softwareXline")
	      .attr("width", w1)
	      .attr("height", "1px")
	      .attr("transform", "translate(0," + margin1*7.5 + ")");

	///////////////////////////////// Programming Skills resize
	// Resize dimension of the chart canvas		 
	w2 = parseInt(d3.select("#programmingSkillsChart_container").style("width")) - margin2*7,
	h2 = 280 - margin1*4;
		
	// resize X Scales 
	var xScale2 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// resize X Axis
	var xAxis2 = d3.svg.axis()
					   .scale(xScale2)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });

	// Resize canvas size
	graph2.attr("width", w2)
		  .attr("height", h2);
		
	// Resize x axis
	graph2.select('.programmingXaxis')
		  .attr("transform", "translate(0," + margin2*12 + ")")
		  .call(xAxis2);
									 
	// Resize custom x axis 								
	graph2.select(".programmingXline")
	      .attr("width", w2)
	      .attr("height", "1px")
	      .attr("transform", "translate(0," + margin1*12 + ")");

	// Resize custom tick marks
	graph2.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Resize chart lines
	graph2.selectAll(".programmingChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")		
				 .attr("width", function(d, i){
									  	       return xScale2(d);
									          });
	// Resize circles
	graph2.selectAll(".programmingEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale2(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
	             .attr("r", 5);	

	///////////////////////////////// Language Skills resize
	// Resize dimension of the chart canvas		 
	w3 = parseInt(d3.select("#languageSkillsChart_container").style("width")) - margin3*7,
	h3 = 140 - margin1*4;
		
	// resize X Scales 
	var xScale3 = d3.scale.linear()
						  .domain([0, 5]) // Set data range: Project Cost 0M to 4000M here for now
						  .range([0, w1]); // Adjust actual data range to the dimension of the chart canvas *Height should be assigned first in order to present number low to high from bottom to top
												      
	// resize X Axis
	var xAxis3 = d3.svg.axis()
					   .scale(xScale3)
				       .orient("bottom")
					   .tickFormat(function (d, i) {
													return ['' , 'Beginner' , '' , 'Intermediate' , '' , 'Advanced'][d];
												    });

	// Resize canvas size
	graph3.attr("width", w3)
		  .attr("height", h3);
		
	// Resize x axis
	graph3.select('.languageXaxis')
		  .attr("transform", "translate(0," + margin2*4.5 + ")")
		  .call(xAxis2);
									 
	// Resize custom x axis 								
	graph3.select(".languageXline")
	      .attr("width", w3)
	      .attr("height", "1px")
	      .attr("transform", "translate(0," + margin1*4.5 + ")");

	// Resize custom tick marks
	graph3.selectAll(".tick")
	    .each(function (d, i) {
	        if ( d == 0 || d == 0.5 || d == 1.5 || d == 2 || d == 2.5 || d == 3.5 || d == 4 || d == 4.5 ) {
	            this.remove();
	        }
	    });

	// Resize chart lines
	graph3.selectAll(".languageChartLine")
				 .attr("x", 0)
				 .attr("y", function(d, i){
									  	   return i * 30
									      })
				 .attr("height", "1px")		
				 .attr("width", function(d, i){
									  	       return xScale3(d);
									          });
	// Resize circles
	graph3.selectAll(".languageEndcircle")
				 .attr("cx", function(d, i){
									  	   return xScale3(d);
									      })
				 .attr("cy", function(d, i){
									  	   return i * 30
									      })
	             .attr("r", 5);						
				

	}
								  
	// Excute resize function							  
	d3.select(window).on('resize', resize); 


// position popup

windowW = $(window).width();

$("#workEduChart").on("mousemove", function(e) {
	var x = e.pageX + 20;
	var y = e.pageY;
	var windowH = $(window).height();
	if (y > (windowH - 10)) {
		var y = e.pageY - 50;
	} else {
		var y = e.pageY - 20;
	}

	$("#info").css({
		"left": x,
		"top": y
	});
});



$("#resumeDownload").hover(function(){
	$("#downloadText").css("color", "#c1d8ac")
    $("#downloadIcon").attr("src", function(index, attr){
        return attr.replace("download.svg", "download_hover.svg");
    });
}, function(){
	$("#downloadText").css("color", "#0d0015")
    $("#downloadIcon").attr("src", function(index, attr){
        return attr.replace("download_hover.svg", "download.svg");
    });
});

  
  
				