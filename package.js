Package.describe({
  name: 'gadicohen:fview-lagometer',
  summary: "IjzerenHein's lagometer packaged for famous-views",
  version: '1.0.0',
  git: 'https://github.com/gadicc/fview-lagometer.git',
  debugOnly: true
});

Package.on_use(function(api) {
	if (api.versionsFrom)
	  api.versionsFrom('1.0');

  api.use('mjn:famous@0.3.0_5', 'client', { weak: true });
  api.use('raix:famono@0.9.14', { weak: true });
  api.use('gadicohen:famous-views@0.1.24');

  api.add_files(
  	[
	  	'lib/pre.js',
	  	'lib/famous-lagometer/Lagometer.js',
	  	'lib/post.js'
		],
		'client'
	);
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:fview-lagometer');
  api.addFiles('gadicohen:fview-lagometer-tests.js');
});
*/
