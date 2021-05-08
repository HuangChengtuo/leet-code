const api = (n) => {
  return new Promise((reslove) => {
    console.log(n)
    setTimeout(() => {
      reslove(n)
    }, n * 1000)
  })
}

const temp = [1, 2, 3, 4, 5]

const arr = temp.map(item => api(item))

async function fn() {
  const all = await Promise.all(arr)
  console.log(all)
}

fn()
