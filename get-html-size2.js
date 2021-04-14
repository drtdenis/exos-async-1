const axios = require('axios')

const getHtmlSize = async (url) => {
  try {
    const response = await axios.get(url)
    return response.headers['content-length']
  } catch (e) {
    throw e
  }
}

const main = async () => {
  try {
    const url1 = 'https://en.wikipedia.org/wiki/Fravia'
    const url2 = 'https://en.wikipedia.org/wiki/Old_Red_Cracker'

    const p1 = getHtmlSize(url1)
    const p2 = getHtmlSize(url2)

    const [size1, size2] = await Promise.all([p1, p2]) // Attente de la résolution des 2 promises !!

    console.log(`size of page ${url1}: ${size1 / 1000}KB`)
    console.log(`size of page ${url2}: ${size2 / 1000}KB`)
  } catch (e) {
    console.error(e.message)
  }
}

main()