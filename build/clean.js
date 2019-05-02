import chalk from 'chalk';
import rimraf from 'rimraf';
import path from 'path';

const clean = () => {
    console.log(`${chalk.green('[+]')} Cleaning dist folder ...`);
    rimraf(path.resolve(process.cwd(), 'dist/'), err => {
        if (err) {
            console.log(
                `${chalk.red(
                    '[!]'
                )} Failed to clean dist folder! Exception: ${err}`
            );
            return process.exit(-1);
        }
        console.log(`${chalk.green('[+]')} Successfully cleaned dist folder.`);
    });
};

clean();
