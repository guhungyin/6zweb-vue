// console.log(navigator)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js?time=20240506161632')
    .then((swReg) => {
      // console.log('Service Worker Registered')
      swReg.pushManager.getSubscription().then((sub) => {
        console.log('Subscription Info', sub)
      })
    })
}

// Code to handle install prompt on desktop

window.deferredPrompt = null

window.addEventListener('beforeinstallprompt', (e) => {
  // console.log('beforeinstallprompt : ', e)
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  window.deferredPrompt = e
  // Update UI to notify the user they can add to home screen
})
window.deferredPromptPrompt = function () {
  window.deferredPrompt.prompt()
  window.deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted pwa prompt')

      localStorage.setItem('pwaInstalled', '1')
    } else {
      console.log('User dismissed pwa prompt')
    }
    window.deferredPrompt = null
  })
}
