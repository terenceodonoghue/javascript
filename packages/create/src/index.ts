#!/usr/bin/env node
import { createRequire } from 'module';
import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();
const require = createRequire(import.meta.url);

env.register(require.resolve('./generators/app'), 'app');

const [generator = 'app'] = process.argv.splice(2);

env.run(generator);
