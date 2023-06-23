/* eslint-disable no-unused-vars */
let { ipcRenderer } = require('electron')

setTimeout(function () {
  var elements = document.querySelectorAll('.maps-foot-r button')
  console.log(elements, 'e elements')

  if (elements.length)
    ![...elements].forEach((el, index) => {
      const dataset = el.dataset || {}
      console.log(dataset, 'dataset')
      const u = dataset.u,
        p = dataset.p
      // const { u, p } = el.dataset
      const pos = (p || 'right') + '-window'

      if (!u) return

      el.addEventListener('click', (e) => {
        e.preventDefault()

        ipcRenderer.send(pos, u)
        console.log('Click', pos, u)
      })
    })
}, 300)
