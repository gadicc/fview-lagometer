myRequire = function(what) {
	switch(what) {
		case 'famous/core/Engine': return famous.core.Engine;
		case 'famous/surfaces/CanvasSurface': return famous.surfaces.CanvasSurface;
		case 'famous/core/View': return famous.core.View;
		default:
			throw new Error('New require of ' + what);
	}
}

module = {};
libDefine = null;

define = function(func) {
	libDefine = func;
}
