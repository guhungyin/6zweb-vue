// console.log(navigator)
// console.log(window)

// navigator.geolocation.getCurrentPosition(function (position) {
//   var latitude = position.coords.latitude

//   var longitude = position.coords.longitude

//   var timestamp = position.timestamp

//   var deviceID = latitude + longitude + timestamp

//   alert(deviceID)
// })

if ('serviceWorker' in navigator) {
  // alert('serviceWorker register')
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js?time=20240514151132')
    .then((swReg) => {
      // console.log('Service Worker Registered')
      // alert('serviceWorker Registered')
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
  // alert('beforeinstallprompt')
  e.preventDefault()
  // Stash the event so it can be triggered later.
  window.deferredPrompt = e
  // Update UI to notify the user they can add to home screen

  if (window.showPwa) {
    window.showPwa(true)
  } else {
    setTimeout(async function () {
      if (window.showPwa) {
        window.showPwa(true)
      }
    }, 5000)
  }
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
