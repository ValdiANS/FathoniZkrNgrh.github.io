const foodComponent = (foodData) => (
  `
  <div class="col pt-0 pb-3 px-2">
    <div class="card shadow">
      <img
        src="${foodData.imageUrl}"
        class="card-img-top"
        alt="images"
        loading="lazy"
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

const emptyComponent = () => (
  `
  <h4 class="text-center">
    Empty . . .
  </h4>
  `
);

const foodSmartComponent = (foodData, rank) => (
  `
  <div class="col pt-0 px-2 pb-3">
    <div class="card shadow w-100">
      <div class="position-relative">
        <img
          src="${foodData.imageUrl}"
          class="card-img-top w-100"
          alt="Food Thumbnail Image"
          loading="lazy"
        />
        <span class="rank-info px-3 py-1">
          #${rank}
        </span>
      </div>

      <div class="card-body px-2 px-md-3">
        <h5 class="card-title">${foodData.nama}</h5>
        <p class="nilai-kalori card-subtitle mb-2">Kalori : ${foodData.kandungan.kalori}</p>
        <p class="nilai-karbohidrat card-subtitle mb-2">Karbohidrat : ${foodData.kandungan.karbohidrat}</p>
        <p class="nilai-protein card-subtitle mb-2">Protein : ${foodData.kandungan.protein}</p>
        <p class="nilai-lemak card-subtitle mb-2">Lemak : ${foodData.kandungan.lemak}</p>
        
        <hr>

        <p class="nilai-akhir card-subtitle">Nilai Akhir : ${foodData.nilaiAkhir}</p>
      </div>
    </div>
  </div>
  `
);
export { foodComponent, emptyComponent, foodSmartComponent };