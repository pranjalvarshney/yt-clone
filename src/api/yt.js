import axios from 'axios'

const yt = async (query) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: "AIzaSyD0CooN4-X_2FqSrD-v0vVLm0Ml4P1xeLg",
                q: query
            }
        })
        const data = response
        return data
    }

export default yt