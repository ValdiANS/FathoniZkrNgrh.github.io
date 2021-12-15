const foodComponent = (foodData) => (
  `
  <div class="col pt-0 pb-3 px-2">
    <div class="card shadow">
      <img
        src="${foodData.imageUrl}"
        class="card-img-top"
        alt="images"
      />
      <div class="card-body">
        <h5 class="card-title">${foodData.nama}</h5>
        <p class="card-subtitle mb-2">Kalori : ${foodData.kandungan.kalori}</p>
        <p class="card-subtitle mb-2">Karbohidrat : ${foodData.kandungan.karbohidrat}</p>
        <p class="card-subtitle mb-2">Protein : ${foodData.kandungan.protein}</p>
        <p class="card-subtitle mb-2">Lemak : ${foodData.kandungan.lemak}</p>
      </div>
    </div>
  </div>
  `
);

export { foodComponent };