const Compiler = require('monkberry').Compiler;
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class MonkAsset extends JSAsset {

  async parse(inputCode) {
    const compiler = new Compiler();

    const node = compiler.compile(this.name, inputCode);
    this.contents = node.toString();
    return super.parse(this.contents);
  }
}

module.exports = MonkAsset;
