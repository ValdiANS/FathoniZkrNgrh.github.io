import { $ } from "./general.js";
import { getMakananPokok } from "./getFoodData.js";
import { foodComponent } from "./component.js";

const foodData = await getMakananPokok();

const makananPokokContainer = $('#makananPokokContainer');

foodData.daftarMakanan.forEach((food) => {
  makananPokokContainer.innerHTML += foodComponent(food);
});
