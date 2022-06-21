#!/usr/bin/env node
import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();

env.register(require.resolve('./generators/app'), 'app');

const [generator = 'app'] = process.argv.splice(2);

env.run(generator);
