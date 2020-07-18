import axios from 'axios';

const KEY = 'AIzaSyByzzZWtFR_xN_ulLpv6GeLej3k5Je9LCw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});