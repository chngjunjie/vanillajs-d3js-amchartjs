/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

var label = chart.createChild(am4core.Label);
label.text = "Drag slider to change radius";
label.exportable = false;

chart.data = [
  {
    category: "Environment",
    value1: 8,
    value2: 2,
    value3: 4,
    value4: 3
  },
  {
    category: "Social Capital",
    value1: 11,
    value2: 4,
    value3: 2,
    value4: 4
  },
  {
    category: "Governance",
    value1: 7,
    value2: 6,
    value3: 6,
    value4: 2
  },
  {
    category: "Air Quality",
    value1: 13,
    value2: 8,
    value3: 3,
    value4: 2
  },
  {
    category: "GHG Emission",
    value1: 12,
    value2: 10,
    value3: 5,
    value4: 1
  }
];
chart.radius = am4core.percent(95);
chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;
chart.innerRadius = am4core.percent(60);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.grid.template.strokeOpacity = 0.1;
categoryAxis.renderer.axisFills.template.disabled = true;
categoryAxis.mouseEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.axisAngle = 260;
valueAxis.renderer.labels.template.horizontalCenter = "right";
valueAxis.min = 0;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.columns.template.radarColumn.strokeOpacity = 1;
series1.name = "Series 1";
series1.dataFields.categoryX = "category";
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.dataFields.valueY = "value1";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.columns.template.radarColumn.strokeOpacity = 1;
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Series 2";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.stacked = true;

var series3 = chart.series.push(new am4charts.RadarColumnSeries());
series3.columns.template.radarColumn.strokeOpacity = 1;
series3.columns.template.tooltipText = "{name}: {valueY.value}";  
series3.name = "Series 3";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.stacked = true;

var series4 = chart.series.push(new am4charts.RadarColumnSeries());
series4.columns.template.radarColumn.strokeOpacity = 1;
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Series 4";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "value4";
series4.stacked = true;

chart.seriesContainer.zIndex = -1;

var slider = chart.createChild(am4core.Slider);
slider.start = 0.5;
slider.exportable = false;
slider.events.on("rangechanged", function() {
  var start = slider.start;

  chart.startAngle = 270 - start * 179 - 1;
  chart.endAngle = 270 + start * 179 + 1;

  valueAxis.renderer.axisAngle = chart.startAngle;
});

/* Create chart */
var chart_1 = am4core.create("chartdiv_1", am4charts.TreeMap);
chart_1.data = [{
  "name": "Environment",
  "value": 63
}, {
  "name": "Social Capital",
  "value": 24
}, {
  "name": "Governance",
  "value": 56
}, {
  "name": "Air Quality",
  "value": 12
}, {
  "name": "GHG Emission",
  "value": 25
}];

/* Set color step */
chart_1.colors.step = 2;

/* Define data fields */
chart_1.dataFields.value = "value";
chart_1.dataFields.name = "name";

/* Configure top-level series */
var level1 = chart_1.seriesTemplates.create("0");
var level1_column = level1.columns.template;
level1_column.column.cornerRadius(10, 10, 10, 10);
level1_column.fillOpacity = 0.8;
level1_column.stroke = am4core.color("#fff");
level1_column.strokeWidth = 5;
level1_column.strokeOpacity = 1;

/* Add bullet labels */
var level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
level1_bullet.locationY = 0.5;
level1_bullet.locationX = 0.5;
level1_bullet.label.text = "{name}";
level1_bullet.label.fill = am4core.color("#fff");


/* Add a navigation bar */
// chart_1.navigationBar = new am4charts.NavigationBar();

/* Add a lagend */
chart_1.legend = new am4charts.Legend();
