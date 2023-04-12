function mostrarFicha() {
    let ficha = document.getElementById("ficha");
    ficha.innerHTML = `
    <h2>Ficha Técnica</h2>
    <ul>
      <li>Nombre completo: Kenneth Paul Block</li>
      <li>Fecha de nacimiento: 21 de noviembre de 1967</li>
       <li>Fecha de falllecimiento: 2 de enero de 2023</li>
      <li>Lugar de nacimiento: Long Beach, California, Estados Unidos</li>
      <li>Profesión: Piloto de rally y empresario</li>
      <li>Logros destacados:
        <ul>
          <li>- Medallista de plata en los X Games en 2005 y 2006</li>
          <li>- Participante en el Campeonato Mundial de Rally</li>
          <li>- Fundador de la marca de ropa y accesorios DC Shoes</li>
        </ul>
      </li>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
    let bio = document.getElementById("bio");
    bio.innerHTML = `
    Kenneth Block es un piloto de rally y empresario estadounidense, nacido el 21 de noviembre de 1967 en Long Beach, California.<br>
    Block ha participado en el Campeonato Mundial de Rally y ha ganado medallas de plata en los X Games en 2005 y 2006.<br>
    Además, es el fundador de la marca de ropa y accesorios DC Shoes. Block es conocido por su estilo de conducción agresivo<br>
    y por popularizar la disciplina del gymkhana a través de sus videos virales en YouTube.
  `;
});
function nombre(){
    alert("Creado por Hugo");
};

