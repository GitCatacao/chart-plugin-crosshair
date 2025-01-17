# chartjs-plugin-madefattobora-xy-crosshair

## Documentation 📚


[Chart.js](http://www.chartjs.org/) plugin to draw horizontal and vertical crosshair lines.

Does not interfere with other plugins.

Very lightweight.

Highly configurable.

It works on mobile devices without adding anything else.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **3.4.0** or later.




## Configuration ⚙️

```javascript
new Chart(ctx, {
	
  // ...  data  ...

  options: {

    // ...  chart options  ...

	plugins: {
		ch_xy_crosshair: {
			enabled: true,
			// ** plugin options
			// mode: 'xy', // 'x', 'y', 'xy' 
			// color: 'red',
			// color_x: 'red',
			// color_y: 'red',
			// width: 1, // pixels number
			// width_x: 1, // pixels number
			// width_y: 1, // pixels number
			// type: 'solid', // solid | dashed
			// type_x: 'solid', // solid | dashed
			// type_y: 'solid', // solid | dashed
			// rainbow: true, // true | false
			// rainbow_x: false, // true | false
			// rainbow_y: false, // true | false
			// px_top: 0, // undefined | pixels number    [0 is different from undefined]
			// px_left: 0, // undefined | pixels number   [0 is different from undefined]
			// px_right: 0, // undefined | pixels number  [0 is different from undefined]
			// px_bottom: 0, // undefined | pixels number [0 is different from undefined]
			// mobile: false, // true, false
			// hide_when_mousedown: false, // true, false
		},
	},
  }
});
```

** When you see a parameter ending with `_x` or `_y`, this overrides the global parameter.

## Sample 💹
https://unpkg.com/chartjs-plugin-madefattobora-xy-crosshair/sample.html

## CDN 💻
[https://unpkg.com/chartjs-plugin-madefattobora-xy-crosshair/](https://unpkg.com/chartjs-plugin-madefattobora-xy-crosshair@0.0.1/chartjs-plugin-madefattobora-xy-crosshair.js)

#### CDN Easy include
```
<script src="https://unpkg.com/chartjs-plugin-madefattobora-xy-crosshair"></script>
```

## GitHub WebSite: https://gitcatacao.github.io/

## License 🏎️🍒


`chartjs-plugin-madefattobora-xy-crosshair` is available under the [MIT license](LICENSE.md).










