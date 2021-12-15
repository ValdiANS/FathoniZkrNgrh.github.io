const baseUrl = 'https://sixers.netlify.app/.netlify/functions';
const makananPokokEndpoint = `${baseUrl}/makanan_pokok`;

const getMakananPokok = async () => {
  const response = await fetch(makananPokokEndpoint);
  const respJson = await response.json();

  return respJson;
}

export { getMakananPokok };
