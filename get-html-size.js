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

    const size1 = await getHtmlSize(url1)
    console.log(`size of page ${url1}: ${size1 / 1000}KB`)

    const size2 = await getHtmlSize(url2)
    console.log(`size of page ${url2}: ${size2 / 1000}KB`)
  } catch (e) {
    console.error(e.message)
  }
}

main()