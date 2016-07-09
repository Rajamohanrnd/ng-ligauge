# ng-liguage
AngularJS directive for Linear Gauge(Basic) based on D3

A simple,extensible,dynamic linear gauge AngularJS directive using D3. 

HOW TO USE

Inject <code>ui-gauge</code> into angular module

<code>angular.module('GaugeDemoApp', ['ui.gauge'])</code>

html
<pre>
<html ng-app="GaugeDemoApp">
<div ng-controller="GaugeCtrl">
<ui-gauge options="options"></ui-gauge>
</div>
</html>
</pre>
