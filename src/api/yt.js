import axios from 'axios'

const yt = async (query) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: "Enter your api key",
                q: query
            }
        })
        const data = response
        return data
    }

export default yt