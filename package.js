Package.describe({
  name: 'em0ney:chartjs',
  version: '1.0.2',
  summary: 'ChartJS - awesome charts packaged for meteor',
  git: 'https://github.com/em0ney/meteor-chartjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('templating', 'client');
  api.addFiles([
    'canvas.html',
    'chart.js'
  ], 'client');

  api.export('Chart', 'client');
});
