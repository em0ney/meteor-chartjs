Package.describe({
  name: 'em0ney:chartjs',
  version: '0.0.1',
  summary: 'ChartJS - awesome charts packaged for meteor',
  git: 'https://github.com/em0ney/meteor-chartjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('chartjs.js');
});
