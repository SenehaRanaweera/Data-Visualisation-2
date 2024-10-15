var vg_1 = "js/Complaints.json";
var vg_2 = "js/Complaints_by_providers.json";
var vg_3 = "js/Complaints_by_small_business.json";
var vg_4 = "js/payment_methods_by_customers.json";
var vg_5 ="js/Payment_method_according_to_gender.json";
var vg_6 = "js/Average_spend.json";
var vg_7 = "js/Revenue_change_by_market.json";
var vg_8 = "js/nbn_1.json";
var vg_9 = "js/nbn_2.json";
var vg_10 = "js/nbn_3.json";
var vg_11 = "js/nbn_4.json";
var vg_12 = "js/nbn_5.json";
var vg_13 = "js/Network_Coverage.json";
var vg_14 = "js/map_new.json";

// Embed the first visualization
vegaEmbed("#line_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Embed the second visualization
vegaEmbed("#stacked_bar_chart", vg_2).then(function(result) {
   
}).catch(console.error);
//Embed the third visualization
vegaEmbed("#vertical_bar_chart", vg_3).then(function(result) {
   
}).catch(console.error);

//Embed the fouth visualization
vegaEmbed("#pie_chart", vg_4).then(function(result) {
   
}).catch(console.error);

//Embed the fifth visualization
vegaEmbed("#simple_bar_chart", vg_5).then(function(result) {
   
}).catch(console.error);
//Embed the 6th vis
vegaEmbed("#Ave_spend_line", vg_6).then(function(result) {
   
}).catch(console.error);

//Embed the 7th vis
vegaEmbed("#revenue_change_line", vg_7).then(function(result) {
   
}).catch(console.error);

//Embed the 8th vis
vegaEmbed("#donutchart1", vg_8).then(function(result) {
   
}).catch(console.error);

//Embed the 9th vis
vegaEmbed("#donutchart2", vg_9).then(function(result) {
   
}).catch(console.error);
//Embed the 10th vis
vegaEmbed("#donutchart3", vg_10).then(function(result) {
   
}).catch(console.error);
//Embed the 11th vis
vegaEmbed("#donutchart4", vg_11).then(function(result) {
   
}).catch(console.error);
//Embed the 12th vis
//vegaEmbed("#donutchart5", vg_12).then(function(result) {
   
//}).catch(console.error);
//Embed the 13th vis
vegaEmbed("#Netlinechart", vg_13).then(function(result) {
   
}).catch(console.error);

vegaEmbed("#complaints_map", vg_14).then(function(result) {
   
}).catch(console.error);
