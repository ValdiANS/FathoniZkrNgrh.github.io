import CONFIG from './config.js';

const addMakananPokok = async (food) => {
  try {
    const response = await fetch(CONFIG.makananPokokEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();
    console.log(respJson);

    return respJson;

  } catch(error) {
    console.log(error);

    return false;
  }
};

const addLaukPauk = async (food) => {
  try {
    const response = await fetch(CONFIG.laukPaukEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;

  } catch(error) {
    console.log(error);

    return false;
  }
};

const addBuah = async (food) => {
  try {
    const response = await fetch(CONFIG.buahEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;

  } catch(error) {
    console.log(error);

    return false;
  }
};

const addSayur = async (food) => {
  try {
    const response = await fetch(CONFIG.sayurEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;
  } catch(error) {
    console.log(error);

    return false;
  }
};

export { addMakananPokok, addLaukPauk, addBuah, addSayur };
