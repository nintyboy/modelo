// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(__dirname, '../..')

const config = getDefaultConfig(projectRoot)

config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

config.resolver.sourceExts = process.env.RN_SRC_EXT
  ? [
      ...process.env.RN_SRC_EXT.split(',').concat(config.resolver.sourceExts),
      'cjs',
    ] // <-- cjs added here
  : [...config.resolver.sourceExts, 'cjs'] // <-- cjs added here

module.exports = config
