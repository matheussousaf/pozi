import { useEffect } from 'react'
import Dashboard from './dashboard'

export default () => {
  // useEffect(()=>{
  //   if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
  //     // add event listeners to handle any of PWA lifecycle event
  //     // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
  //     window.workbox.addEventListener('installed', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log('event => ', event)
  //     })

  //     window.workbox.addEventListener('controlling', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log('event => ', event)
  //     })

  //     window.workbox.addEventListener('activated', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log('event => ', event)
  //     })

  //     // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
  //     // NOTE: set skipWaiting to false in next.config.js pwa object
  //     // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
  //     // window.workbox.addEventListener('waiting', event => {
  //     //   if (confirm('A new version is installed, reload to use the new version immediately?')) {
  //     //     window.workbox.addEventListener('controlling', event => {
  //     //       window.location.reload()
  //     //     })
  //     //     window.workbox.messageSW({type: 'SKIP_WAITING'})
  //     //   } else {
  //     //     // User rejected, new verion will be automatically load when user open the app next time.
  //     //   }
  //     // })

  //     // ISSUE - this is not working as expected, why?
  //     // I could only make message event listenser work when I manually add this listenser into sw.js file
  //     window.workbox.addEventListener('message', event => {
  //       console.log(`Event ${event.type} is triggered.`)
  //       console.log(event)
  //     })

  //     window.workbox.register()
  //   }
  // }, [])

  return (
    <>
      <Dashboard />
    </>
  )
}
