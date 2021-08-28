export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import '../packages/ui-mobile/src/global-style/antd/index.less'
import '../packages/ui-mobile/src/global-style/antd-mobile/index.less'
