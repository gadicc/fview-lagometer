# famous-lagometer

This is [IjzerenHein's Lagometer](https://github.com/IjzerenHein/famous-lagometer)
packaged for Meteor to work with famous-views and either raix:famono or mjn:famous.

You can enable/disable the lagometer with ALT-L.  Starts disabled by default -
there when you need it, not in your way otherwise.

This is a `debugOnly` package; it will never be bundled/deployed.

Default options:

```js
FView.lagometer = {
	modifierOptions: {
		size: [100, 100],
		align: [1.0, 0.0],
		origin: [1.0, 0.0],
		translate: [-20, 10, 1000]
	},
	lagometerOptions: {
	}
}
```

You can tweak any of these BEFORE famous.ready() callbacks are run.  Afterwards,
`fview.lagometer` becomes the lagometer instance.

`lagometerOptions` are passed to the constructor, and is by default empty,
to use the follow defaults from the lagometer package:

```
{
    drawFrequency: 2,   // by default 2 times per second
    min: 0,             // minimum scale
    max: 34,            // max scale
    backgroundColor: 'rgba(200, 0, 0, 0.8)',
    borderColor: 'rgba(255, 0, 0, 0.8)',
    textColor: 'rgba(255, 255, 255, 0.8)',
    font: '28px Arial',
    frameColor: '#00FF00',
    scriptColor: '#BBBBFF'
};
```
