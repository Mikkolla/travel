const gulp = require('gulp');


// const ghPages = require('gulp-gh-pages');

// const paths = {
// 	scripts: {
// 		src: './',
// 		dest: './build' ,
// 	}
// }

// async function buildHtml()  {
// 	gulp.src(['*.html'])
// 		.pipe(gulp.dest(paths.scripts.dest));
// }

// exports.default = async function() {
// 	buildHtml();
// }

// gulp.task('deploy', function() {
// 	return gulp.src('./build/**/*')
// 	  .pipe(ghPages());
//   });


// Tasks
require('./gulp/dev.js');
require('./gulp/prod.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'prod',
	gulp.series(
		'clean:prod',
		gulp.parallel('html:prod', 'sass:prod', 'images:prod', 'fonts:prod', 'files:prod', 'js:prod'),
		gulp.parallel('server:prod')
	)
);
