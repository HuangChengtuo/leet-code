const api = new Promise((reslove, reject) => {
  setTimeout(() => { reslove('ok') }, 1000)
})

const arr = new Array(5)

async function fn() {
  for (let i = 0; i < 5; i++) {
    api.then(res => {
      arr[i] = res
    })
  }
}

fn()

setTimeout(() => {
  console.log(arr)
}, 10000)