import CONFIG from "./config.js";

const getMakananPokok = async () => {

  try {
    const response = await fetch(CONFIG.makananPokokEndpoint);
    const respJson = await response.json();
  
    return respJson; 

  } catch (error) {
    console.log(error);

    return false;
  }
}

export { getMakananPokok };
