import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router'
export { render }
import { getPageTitle } from './getPageTitle'
export const clientRouting = true

let app: ReturnType<typeof createApp>
async function render(pageContext: PageContextBuiltInClient & PageContext) {
  if (!app) {
    app = createApp(pageContext)
    app.mount('#app')
  } else {
    app.changePage(pageContext)
  }
  document.title = getPageTitle(pageContext)
}
