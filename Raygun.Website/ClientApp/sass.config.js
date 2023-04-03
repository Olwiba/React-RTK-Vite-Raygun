import sass from 'node-sass';
import fs from 'fs';

sass.render({
    file: 'src/styles/scss/screen.scss',
    outputStyle: 'compressed'
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        fs.writeFile('src/styles/css/style.css', result.css, function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('SCSS compiled successfully');
            }
        });
    }
});