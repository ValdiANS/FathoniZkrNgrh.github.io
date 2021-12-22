// const baseUrl = 'https://sixers.netlify.app/.netlify/functions';
const baseUrl = 'http://localhost:8888/.netlify/functions';

const CONFIG = {
  baseUrl,
  makananPokokEndpoint: `${baseUrl}/makanan_pokok`,
  laukPaukEndpoint: `${baseUrl}/lauk_pauk`,
  buahEndpoint: `${baseUrl}/buah`,
  sayurEndpoint: `${baseUrl}/sayur`,
};

export default CONFIG;
