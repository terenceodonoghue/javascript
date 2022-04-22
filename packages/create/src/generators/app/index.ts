import path from 'path';
import Generator from 'yeoman-generator';

interface Answers {
  name: string;
  workspace: string;
}

export default class extends Generator {
  private answers?: Answers;

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's the project called?",
        default: path.basename(process.cwd()),
      },
      {
        type: 'confirm',
        name: 'workspace',
        message: 'Is it a workspace?',
        default: false,
      },
    ]);
  }

  configuring() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      {
        year: new Date().getFullYear(),
      },
      undefined,
      { globOptions: { dot: true } },
    );
  }

  install() {
    this.spawnCommandSync('yarn', ['set', 'version', 'berry']);

    this.spawnCommandSync('yarn', [
      'config',
      'set',
      'initScope',
      'terenceodonoghue',
    ]);

    this.spawnCommandSync('yarn', [
      'config',
      'set',
      'nodeLinker',
      'node-modules',
    ]);

    this.spawnCommandSync('yarn', [
      'config',
      'set',
      'npmScopes.terenceodonoghue.npmAuthToken',
      `\${GITHUB_TOKEN}`,
    ]);

    this.spawnCommandSync('yarn', [
      'config',
      'set',
      'npmScopes.terenceodonoghue.npmRegistryServer',
      'https://npm.pkg.github.com',
    ]);

    this.spawnCommandSync('yarn', [
      'init',
      this.answers?.workspace ? '-w' : '-y',
    ]);
  }
}
