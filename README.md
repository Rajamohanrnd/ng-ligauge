# ng-ligauge
AngularJS directive for Linear Gauge(Basic) based on D3

A simple,extensible,dynamic linear gauge AngularJS directive using D3. 

HOW TO USE

Inject <code>ui-gauge</code> into angular module

<code>angular.module('GaugeDemoApp', ['ui.gauge'])</code>

html

<pre lang="html">

&lt;div ng-app="GaugeDemoApp">
  &lt;div ng-controller="GaugeCtrl">
    &lt;ui-gauge options="options">&lt;/ui-gauge>
  &lt;/div>
&lt;/div>

</pre>

<a href='http://plnkr.co/edit/s11BtkOsGqXFOUsTuUOT?p=preview' target='_blank'>Plunker example</a>
