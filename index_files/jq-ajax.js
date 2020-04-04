function updateCanvas(obj,filter_selection){var container=obj;var chart_canvas=container.find('.performance-chart');var id=chart_canvas.data('id');var style=chart_canvas.data('style');var default_filter=chart_canvas.data('default-filter');var unique_id=chart_canvas.data('unique-id');var speedAvgContainer=container.find('.average-speed-value');var uptimeAvgContainer=container.find('.average-uptime-value');var tickSize=8;chart_canvas.css('opacity','0.3');$.post(my_ajax_obj.ajax_url,{_ajax_nonce:my_ajax_obj.nonce,action:"filter_graph",title:filter_selection.attr('value'),page_id:id,filter:filter_selection.attr('value')},function(data){container.find('.chartjs-size-monitor').remove();chart_canvas.remove();container.find('script').remove();var htmlChart='<canvas id="performance-chart-'+unique_id+'" class="performance-chart performance-chart-'+id+'" data-id="'+id+'" data-style="'+style+'" data-default-filter="'+default_filter+'" data-unique-id="'+unique_id+'"></canvas>';container.find('.canvas-container').append(htmlChart);htmlChart=container.find('canvas');var returnedArray=JSON.parse(data);var speedList=new Array();var uptimeList=new Array();var downtimeList=new Array();var dateList=new Array();var speedAvg=returnedArray[1];var uptimeAvg=returnedArray[2];speedAvgContainer.text(speedAvg);uptimeAvgContainer.text(uptimeAvg);returnedArray[0].forEach(function(value){speedList.push(value['speed']);uptimeList.push(value['uptime']);downtimeList.push(value['downtime'])
dateList.push(value['date']);});var ctx=htmlChart[0].getContext('2d');var durationValue=1000;var aspectRatioValue=2;if(style=='list'){var drawTicksFlag=false;var displayFlag=false;var chartSpeedBg='rgba(43,171,255,0.4)';var chartUptimeBg='rgba(255,0,0,0.4)';durationValue=0;aspectRatioValue=6;}else{var drawTicksFlag=true;var displayFlag=true;var chartSpeedBg='rgba(43,171,255,0.4)';var chartUptimeBg='rgba(255,0,0,0.4)';}
var chart=new Chart(ctx,{type:'line',data:{labels:dateList,datasets:[{label:'Speed ms',backgroundColor:chartSpeedBg,borderColor:'rgb(27, 118, 179)',borderWidth:2,data:speedList,yAxisID:'speed-y-axis',},{label:'Downtime minutes',backgroundColor:chartUptimeBg,borderColor:'rgb(255, 50, 50)',borderWidth:2,data:downtimeList,yAxisID:'downtime-y-axis',type:'bar',}]},options:{scales:{xAxes:[{gridLines:{display:false,drawTicks:drawTicksFlag,},ticks:{display:displayFlag,fontSize:tickSize,}}],yAxes:[{id:'speed-y-axis',type:'linear',gridLines:{display:false,drawTicks:drawTicksFlag,},ticks:{display:displayFlag,fontSize:tickSize,}},{id:'downtime-y-axis',type:'linear',position:'right',gridLines:{display:false,drawTicks:drawTicksFlag,},ticks:{suggestedMin:0,display:true,fontSize:tickSize,}}]},tooltips:{callbacks:{label:function(t,d){if(t.datasetIndex===0){return 'Speed: '+t.yLabel+'ms';}else if(t.datasetIndex===1){return 'Downtime: '+Math.round(t.yLabel/60)+'m';}}}},elements:{point:{radius:0,hitRadius:10,},},legend:{position:'bottom',display:displayFlag,onClick:function(event,legendItem){var index=legendItem.datasetIndex;let ci=this.chart;ci.data.datasets[index].hidden=!ci.data.datasets[index].hidden;ci.options.scales.yAxes[index].display=!ci.options.scales.yAxes[index].display;ci.update();}},animation:{duration:durationValue,},aspectRatio:aspectRatioValue,maintainAspectRatio:false,hover:{animationDuration:0},responsiveAnimationDuration:0,onResize:function(chart,size){chart.update();}}});});return obj;}
jQuery(document).ready(function($){$(".perf-time-filter-instance").change(function(){var filter_selection=$(this).find(":selected");var chart_canvas_container=$('.performance-chart-container');var filter_scope=$(this).data('scope');var filter_parent=$(this).closest('.filter-container');var sibling_chart_container=filter_parent.next('.performance-chart-container');if(filter_scope=="single"){updateCanvas(sibling_chart_container,filter_selection);}else{chart_canvas_container.each(function(){console.log("change");updateCanvas($(this),filter_selection);$(".perf-time-filter-instance").each(function(e){$(this).val(filter_selection.attr('value'));});});}});});