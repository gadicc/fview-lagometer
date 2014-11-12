var Lagometer;
var lagRenderNode;
var child;

FView.lagometer = {
	modifierOptions: {
		size: [100, 100],
		align: [1.0, 0.0],
		origin: [1.0, 0.0],
		translate: [-20, 10, 1000]
	}
}

FView.ready(function() {
	libDefine(myRequire, {}, module);
	Lagometer = module.exports;

	// If we prefer not to touch the source, no way to remove eventhandlers
	// created with bind and not stored as their own identifier
	var origOnEngineRender = Lagometer.prototype._onEngineRender;
	Lagometer.prototype._onEngineRender = function() {
		if (lagRenderNode._child)
			return origOnEngineRender.apply(this, arguments);
	}

	lagRenderNode = new famous.core.RenderNode;

	FView.lagometer.modifierOptions.transform
	  = famous.core.Transform.translate.apply(null,
	    FView.lagometer.modifierOptions.translate);
	delete FView.lagometer.modifierOptions.translate;

	var modifier = new famous.core.Modifier(
		FView.lagometer.modifierOptions);
	var lagometer = new Lagometer({
	  size: modifier.getSize()
	});

	FView.mainCtx.add(lagRenderNode).add(modifier).add(lagometer);
	child = lagRenderNode._child;
	lagRenderNode._child = null; // start disabled

	FView.log.debug('fview-lagometer all setup.  alt-L to toggle.');

	var origOnkeydown = document.onkeydown;
	document.onkeydown = function(event) {
		if (origOnkeydown)
			origOnkeydown.apply(this, arguments);
		if (event.altKey && event.keyCode == 76) {
			if (lagRenderNode._child) {
				lagRenderNode._child = null;
			} else
				lagRenderNode._child = child;
		}
	}
});
