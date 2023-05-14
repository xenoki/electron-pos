import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';
import { ForgeExternalsPlugin } from './lib/index';

const config: ForgeConfig = {
  packagerConfig: {
    extraResource: './src/db/cpw.db',
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    new MakerDeb({}),
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/client/index.html',
            js: './src/electron/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/electron/preload.ts',
            },
          },
        ],
      },
    }),
    new ForgeExternalsPlugin({
      externals: ['escpos', 'escpos-usb', 'usb'],
      includeDeps: true,
    }),
  ],
};

export default config;
