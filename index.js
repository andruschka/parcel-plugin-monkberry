module.exports = function (bundler) {
  bundler.addAssetType('.monk', require.resolve('./MonkAsset'));
};
