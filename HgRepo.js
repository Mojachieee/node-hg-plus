const Fs = require('fs-extra-promise');
const Command = require('./utils/Command');

module.exports = class HgRepo {
  constructor({ url = null, username = null, password = null, path = process.cwd() }) {
    this.path = path;
    this.username = username;
    this.password = password;
    this.url = url;

    Fs.ensureDirSync(this.path);
  }

  /**
   * Initialize a new repository at the provided path.
   * @param  {url:String, user:String, pass:String, path:String}   to   [description]
   * @param  {Function} done [description]
   *
   * @return {[type]}        [description]
   */
  init(done = undefined) {
    return Command.run('init', this.path)
      .asCallback(done);
  }
  commit(message, done = undefined) {
    if (!message) throw new Error('Commit\'s must have a message');

    return Command.run('commit', this.path, ['-m', `"${message}"`])
      .asCallback(done);
  }

  add(options, done = undefined) {
    return Command.run('add', this.path, options)
      .asCallback(done);
  }

  push(options, done = undefined) {
    return Command.run('push', this.path, options)
      .asCallback(done);
  }

  pull(options, done = undefined) {
    return Command.run('pull', this.path, options)
      .asCallback(done);
  }

  update(options, done = undefined) {
    return Command.run('update', this.path, options)
      .asCallback(done);
  }

  rename(options, done = undefined) {
    return Command.run('rename', this.path, options)
      .asCallback(done);
  }

  merge(options, done = undefined) {
    return Command.run('merge', this.path, options)
      .asCallback(done);
  }
};
