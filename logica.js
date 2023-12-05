function calc() {
  let area = document.getElementById("barra_area").value
  let tipo = document.getElementById("tipo").value
  let idade = document.getElementById("barra_idade").value
  let garagem1 = document.getElementById("garagem_sim").checked
  let garagem0 = document.getElementById("garagem_nao").checked
  let transportes1 = document.getElementById("transportes_sim").checked
  let transportes0 = document.getElementById("transportes_nao").checked
  let zona1, zona2, zona3, c1, c2, c3, garagem, transportes 

  if (0 < idade && idade <= 5) {
    c1 = 1;
  }
  else if (5 < idade && idade <= 10) {
    c1 = 0.95;
  }
  else {
    c1 = 0.9;
  }
  if (garagem1 == true) {
    c2 = 1
    garagem = "Sim"
  }
  if (garagem0 == true) {
    c2 = 0.95
    garagem = "Não"
  }
  if (transportes1 == true) {
    c3 = 1
    transportes = "Sim"
  }
  if (transportes0 == true) {
    c3 = 0.9
    transportes = "Não"
  }
  zona1 = area * 1200 * c1 * c2 * c3
  zona2 = area * 2000 * c1 * c2 * c3
  zona3 = area * 2500 * c1 * c2 * c3
  document.getElementById("valor_zona1").innerHTML = zona1;
  document.getElementById("valor_zona2").innerHTML = zona2;
  document.getElementById("valor_zona3").innerHTML = zona3;
  document.getElementById("valor_area").innerHTML = area;
  document.getElementById("valor_area1").innerHTML = area;
  document.getElementById("valor_area2").innerHTML = area;
  document.getElementById("valor_garagem").innerHTML = garagem;
  document.getElementById("valor_garagem1").innerHTML = garagem;
  document.getElementById("valor_garagem2").innerHTML = garagem;
  document.getElementById("valor_idade").innerHTML = idade;
  document.getElementById("valor_idade1").innerHTML = idade;
  document.getElementById("valor_idade2").innerHTML = idade;
  document.getElementById("valor_transportes").innerHTML = transportes;
  document.getElementById("valor_transportes1").innerHTML = transportes;
  document.getElementById("valor_transportes2").innerHTML = transportes;
}
function selec1() {
  let z = document.getElementById("zona1")
  let y = document.getElementById("conteudo1")
  if (y.style.display == "none") {
    z.style.cssText = 'cursor: pointer;padding: 10px;font-family: $fonte2;font-size: 22px;line-height: 40px;margin-left: 40px;margin-right: 40px;background-color: #222323;border-radius: 20px;font-style: 13px;color: white;'
    y.style.cssText = 'display: block'
  }
  else {
    z.style.cssText = 'padding: 60px;margin-right: 75px;font-size: 25px;font-family: $fonte2;line-height: 75px;cursor: pointer;'
    y.style.cssText = 'display: none'
  }
  let area = document.getElementById("barra_area").value
  let tipo = document.getElementById("tipo").value
  let idade = document.getElementById("barra_idade").value
  let garagem1 = document.getElementById("garagem_sim").checked
  let garagem0 = document.getElementById("garagem_nao").checked
  let transportes1 = document.getElementById("transportes_sim").checked
  let transportes0 = document.getElementById("transportes_nao").checked
  let zona1, zona2, zona3, c1, c2, c3, garagem, transportes, spread1, spread2, spread3, juro1=0.5, juro2=0.5 , juro3=0.5, ve1, vei1, vp1
  if (0 < idade && idade <= 5) {
    c1 = 1;
  }
  else if (5 < idade && idade <= 10) {
    c1 = 0.95;
  }
  else {
    c1 = 0.9;
  }
  if (garagem1 == true) {
    c2 = 1
    garagem = "Sim"
  }
  if (garagem0 == true) {
    c2 = 0.95
    garagem = "Não"
  }
  if (transportes1 == true) {
    c3 = 1
    transportes = "Sim"
  }
  if (transportes0 == true) {
    c3 = 0.9
    transportes = "Não"
  }
  spread1 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread2 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread3 = (Math.random() * (5 - 1) + 1).toFixed(2);
  juro1 += +spread1
  juro2 += +spread2
  juro3 += +spread3
  zona1 = ((area * 1200 * c1 * c2 * c3) * (juro1/100)) + (area * 1200 * c1 * c2 * c3)
  zona2 = ((area * 1200 * c1 * c2 * c3) * (juro2/100)) + (area * 1200 * c1 * c2 * c3)
  zona3 = ((area * 1200 * c1 * c2 * c3) * (juro3/100)) + (area * 1200 * c1 * c2 * c3)
  ve1 = ((zona1/120) * 118).toFixed(2);
  vei1 = ((zona1/120) * 2).toFixed(2);
  vp1 = ((zona1 - vei1) / 120).toFixed(2);
  ve2 = ((zona2/120) * 118).toFixed(2);
  vei2 = ((zona2/120) * 2).toFixed(2);
  vp2 = ((zona2 - vei2) / 120).toFixed(2);
  ve3 = ((zona3/120) * 118).toFixed(2);
  vei3 = ((zona3/120) * 2).toFixed(2);
  vp3 = ((zona3 - vei3) / 120).toFixed(2);
  document.getElementById("montante1").innerHTML = zona1;
  document.getElementById("montante2").innerHTML = zona2;
  document.getElementById("montante3").innerHTML = zona3;
  document.getElementById("ve1").innerHTML = ve1;
  document.getElementById("vei1").innerHTML = vei1;
  document.getElementById("vp1").innerHTML = vp1;
  document.getElementById("ve2").innerHTML = ve2;
  document.getElementById("vei2").innerHTML = vei2;
  document.getElementById("vp2").innerHTML = vp2;
  document.getElementById("ve3").innerHTML = ve3;
  document.getElementById("vei3").innerHTML = vei3;
  document.getElementById("vp3").innerHTML = vp3;
  document.getElementById("spread1").innerHTML = spread1;
  document.getElementById("spread2").innerHTML = spread2;
  document.getElementById("spread3").innerHTML = spread3;
  document.getElementById("juro1").innerHTML = juro1;
  document.getElementById("juro2").innerHTML = juro2;
  document.getElementById("juro3").innerHTML = juro3;
}
function selec2() {
  let z = document.getElementById("zona2")
  let y = document.getElementById("conteudo2")
  let preco = document.getElementById("valor_zona2").value
  if (y.style.display == "none") {
    z.style.cssText = 'cursor: pointer;padding: 10px;font-family: $fonte2;font-size: 22px;line-height: 40px;margin-left: 40px;margin-right: 40px;background-color: #222323;border-radius: 20px;font-style: 13px;color: white;'
    y.style.cssText = 'display: block'
  }
  else {
    z.style.cssText = 'padding: 60px;margin-right: 75px;font-size: 25px;font-family: $fonte2;line-height: 75px;cursor: pointer;'
    y.style.cssText = 'display: none'
  }
  let area = document.getElementById("barra_area").value
  let tipo = document.getElementById("tipo").value
  let idade = document.getElementById("barra_idade").value
  let garagem1 = document.getElementById("garagem_sim").checked
  let garagem0 = document.getElementById("garagem_nao").checked
  let transportes1 = document.getElementById("transportes_sim").checked
  let transportes0 = document.getElementById("transportes_nao").checked
  let zona1, zona2, zona3, c1, c2, c3, garagem, transportes, spread1, spread2, spread3, juro1=0.5, juro2=0.5 , juro3=0.5, ve2, vei2, vp2

  if (0 < idade && idade <= 5) {
    c1 = 1;
  }
  else if (5 < idade && idade <= 10) {
    c1 = 0.95;
  }
  else {
    c1 = 0.9;
  }
  if (garagem1 == true) {
    c2 = 1
    garagem = "Sim"
  }
  if (garagem0 == true) {
    c2 = 0.95
    garagem = "Não"
  }
  if (transportes1 == true) {
    c3 = 1
    transportes = "Sim"
  }
  if (transportes0 == true) {
    c3 = 0.9
    transportes = "Não"
  }
  spread1 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread2 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread3 = (Math.random() * (5 - 1) + 1).toFixed(2);
  juro1 += +spread1
  juro2 += +spread2
  juro3 += +spread3
  zona1 = ((area * 2000 * c1 * c2 * c3) * (juro1/100)) + (area * 2000 * c1 * c2 * c3)
  zona2 = ((area * 2000 * c1 * c2 * c3) * (juro2/100)) + (area * 2000 * c1 * c2 * c3)
  zona3 = ((area * 2000 * c1 * c2 * c3) * (juro3/100)) + (area * 2000 * c1 * c2 * c3)
  ve1 = ((zona1/120) * 118).toFixed(2);
  vei1 = ((zona1/120) * 2).toFixed(2);
  vp1 = ((zona1 - vei1) / 120).toFixed(2);
  ve2 = ((zona2/120) * 118).toFixed(2);
  vei2 = ((zona2/120) * 2).toFixed(2);
  vp2 = ((zona2 - vei2) / 120 ).toFixed(2);
  ve3 = ((zona3/120) * 118).toFixed(2);
  vei3 = ((zona3/120) * 2).toFixed(2);
  vp3 = ((zona3 - vei3) / 120).toFixed(2);
  document.getElementById("montante1").innerHTML = zona1;
  document.getElementById("montante2").innerHTML = zona2;
  document.getElementById("montante3").innerHTML = zona3;
  document.getElementById("ve1").innerHTML = ve1;
  document.getElementById("vei1").innerHTML = vei1;
  document.getElementById("vp1").innerHTML = vp1;
  document.getElementById("ve2").innerHTML = ve2;
  document.getElementById("vei2").innerHTML = vei2;
  document.getElementById("vp2").innerHTML = vp2;
  document.getElementById("ve3").innerHTML = ve3;
  document.getElementById("vei3").innerHTML = vei3;
  document.getElementById("vp3").innerHTML = vp3;
  document.getElementById("spread1").innerHTML = spread1;
  document.getElementById("spread2").innerHTML = spread2;
  document.getElementById("spread3").innerHTML = spread3;
  document.getElementById("juro1").innerHTML = juro1;
  document.getElementById("juro2").innerHTML = juro2;
  document.getElementById("juro3").innerHTML = juro3;
}
function selec3() {
  let z = document.getElementById("zona3")
  let y = document.getElementById("conteudo3")
  let preco = document.getElementById("valor_zona3").value
  if (y.style.display == "none") {
    z.style.cssText = 'cursor: pointer;padding: 10px;font-family: $fonte2;font-size: 22px;line-height: 40px;margin-left: 40px;margin-right: 40px;background-color: #222323;border-radius: 20px;font-style: 13px;color: white;'
    y.style.cssText = 'display: block'
  }
  else {
    z.style.cssText = 'padding: 60px;margin-right: 75px;font-size: 25px;font-family: $fonte2;line-height: 75px;cursor: pointer;'
    y.style.cssText = 'display: none'
  }
  let area = document.getElementById("barra_area").value
  let tipo = document.getElementById("tipo").value
  let idade = document.getElementById("barra_idade").value
  let garagem1 = document.getElementById("garagem_sim").checked
  let garagem0 = document.getElementById("garagem_nao").checked
  let transportes1 = document.getElementById("transportes_sim").checked
  let transportes0 = document.getElementById("transportes_nao").checked
  let zona1, zona2, zona3, c1, c2, c3, garagem, transportes, spread1, spread2, spread3, juro1=0.5, juro2=0.5 , juro3=0.5, ve3, vei3, vp3

  if (0 < idade && idade <= 5) {
    c1 = 1;
  }
  else if (5 < idade && idade <= 10) {
    c1 = 0.95;
  }
  else {
    c1 = 0.9;
  }
  if (garagem1 == true) {
    c2 = 1
    garagem = "Sim"
  }
  if (garagem0 == true) {
    c2 = 0.95
    garagem = "Não"
  }
  if (transportes1 == true) {
    c3 = 1
    transportes = "Sim"
  }
  if (transportes0 == true) {
    c3 = 0.9
    transportes = "Não"
  }
  spread1 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread2 = (Math.random() * (5 - 1) + 1).toFixed(2);
  spread3 = (Math.random() * (5 - 1) + 1).toFixed(2);
  juro1 += +spread1
  juro2 += +spread2 
  juro3 += +spread3
  zona1 = ((area * 2500 * c1 * c2 * c3) * (juro1/100)) + (area * 2500 * c1 * c2 * c3)
  zona2 = ((area * 2500 * c1 * c2 * c3) * (juro2/100)) + (area * 2500 * c1 * c2 * c3)
  zona3 = ((area * 2500 * c1 * c2 * c3) * (juro3/100)) + (area * 2500 * c1 * c2 * c3)
  ve1 = ((zona1/120) * 118).toFixed(2);
  vei1 = ((zona1/120) * 2).toFixed(2);
  vp1 = ((zona1 - vei1) / 120).toFixed(2);
  ve2 = ((zona2/120) * 118).toFixed(2);
  vei2 = ((zona2/120) * 2).toFixed(2);
  vp2 = ((zona2 - vei2) / 120).toFixed(2);
  ve3 = ((zona3/120) * 118).toFixed(2);
  vei3 = ((zona3/120) * 2).toFixed(2);
  vp3 = ((zona3 - vei3) / 120).toFixed(2);
  document.getElementById("montante1").innerHTML = zona1;
  document.getElementById("montante2").innerHTML = zona2;
  document.getElementById("montante3").innerHTML = zona3;
  document.getElementById("ve1").innerHTML = ve1;
  document.getElementById("vei1").innerHTML = vei1;
  document.getElementById("vp1").innerHTML = vp1;
  document.getElementById("ve2").innerHTML = ve2;
  document.getElementById("vei2").innerHTML = vei2;
  document.getElementById("vp2").innerHTML = vp2;
  document.getElementById("ve3").innerHTML = ve3;
  document.getElementById("vei3").innerHTML = vei3;
  document.getElementById("vp3").innerHTML = vp3;
  document.getElementById("spread1").innerHTML = spread1;
  document.getElementById("spread2").innerHTML = spread2;
  document.getElementById("spread3").innerHTML = spread3;
  document.getElementById("juro1").innerHTML = juro1;
  document.getElementById("juro2").innerHTML = juro2;
  document.getElementById("juro3").innerHTML = juro3;
}
function opcoes() {
  let h = document.getElementById("parte2");
  if (h.style.display === 'none') {
    h.style.display = "block";
    window.scrollBy(0, 2800);
    scrolldelay = setTimeout(scrollY, 100);
  } else {
    h.style.display = "none";
  }
}

function esconder_zonas() {
  let zonas = document.getElementById("zonas");
  if (zonas.style.display === "none") {
    zonas.style.display = "flex";
  } else {
    zonas.style.display = "none";
  }
}

function funcao() {
  let x = document.getElementById("parte3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function funcaofin() {
  let x = document.getElementById("finance");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function checkar() {
  document.getElementById("myCheck").checked = true;

}
