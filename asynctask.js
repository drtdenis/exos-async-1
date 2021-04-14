const asyncTask = (id, timeout, willFulFilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFulFilled === true) {
        // ce console.log simule un side effect
        console.log(`Log: task${id} done after ${timeout} seconds`)
        // la valeur de retour est contenu dans le resolve
        resolve(`result from task${id}`)
      } else {
        reject(new Error(`faillure from task${id}`))
      }
    }, timeout * 1000)
  })
}
/*
const main = async () => {
  asyncTask(1, 10, true)
  asyncTask(2, 5, true)
  asyncTask(3, 0.5, true)
  asyncTask(4, 1, true)
}
main()
*/

/* bad progs

const main = async () => {
  try {
    let res1 = await asyncTask(1, 10, true)
    console.log(res1)
    let res2 = await asyncTask(2, 5, true)
    console.log(res2)
    let res3 = await asyncTask(3, 0.5, false)
    console.log(res3)
    let res4 = await asyncTask(4, 1, true)
    console.log(res4)
  } catch (e) {
    console.error(e.message)
  }
}
main()
*/

const main = async () => {
  try {
    let data = await Promise.all([
      asyncTask(1, 10, true),
      asyncTask(2, 5, true),
      asyncTask(3, 0.5, true),
      asyncTask(4, 1, true),
    ])
    console.log(`results: ${data}`) // data is an array
  } catch (e) {
    console.error(e.message)
  }
}

main()