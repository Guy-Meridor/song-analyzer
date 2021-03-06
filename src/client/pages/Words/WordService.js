import axios from 'axios'
const WordAPI = axios.create({
    baseURL: `/api/words`,
});

const publicApi = {};

publicApi.getWordsInstances = word => WordAPI.get(`/${word}/instances`);
publicApi.getAllInstances = () => WordAPI.get(`/instances`);
publicApi.getWordsStartsWith = prefix => WordAPI.get(`/startsWith/${prefix}`)
publicApi.getWords = WordAPI.get;

export default publicApi;