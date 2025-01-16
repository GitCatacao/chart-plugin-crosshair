(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('chart.js'), require('chart.js/helpers')) :
typeof define === 'function' && define.amd ? define(['chart.js', 'chart.js/helpers'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Chart, global.Chart.helpers));
})(this, (function (chart_js, helpers) { 'use strict';


const test_plugin = {
	id: 'crosshair_xy_lines',
	afterInit: function(chart, _, options){
		console.log('Init.')
	},
}

Chart.register(test_plugin);	


}));
