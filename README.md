# famous-lagometer

This is [IjzerenHein's Lagometer](https://github.com/IjzerenHein/famous-lagometer)
packaged for Meteor to work with famous-views and either raix:famono or mjn:famous.

You can enable/disable the lagometer with ALT-L.  I found it used up a full core
while it was running, which might lead to exaggerated results.  Starts disabled
by default.

This is a `debugOnly` package; it will never be bundled/deployed.

Default options:

```js
FView.lagometer = {
	modifierOptions: {
		size: [100, 100],
		align: [1.0, 0.0],
		origin: [1.0, 0.0],
		translate: [-20, 10, 1000]
	}
}
```

You can tweak any of these BEFORE famous.ready() callbacks are run.