function insertUidIframe() {
  const ifa = document.createElement('iframe')
  ifa.src = process.env.IFRAME_SRC
  document.body.appendChild(ifa)
  window.addEventListener('message', (e) => {
    if (e.origin === process.env.IFRAME_DOMAIN) {
      console.log(e.data)
    }
  })
}