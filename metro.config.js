const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable hermes for better performance
config.transformer.hermesCommand = 'hermes';

// Enable native driver optimizations
config.transformer.enableBabelRCLookup = false;
config.transformer.enableBabelRuntime = false;

// Optimize for React Native Screens
if (!config.resolver.alias) {
  config.resolver.alias = {};
}
config.resolver.alias = {
  ...config.resolver.alias,
  'react-native-screens': require.resolve('react-native-screens'),
};

// Export with NativeWind wrapper - this must be last
module.exports = withNativeWind(config, { 
  input: './global.css',
  configPath: './tailwind.config.js'
});