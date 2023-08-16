const form = document.querySelector('form');
const metrekareSonucu = document.querySelector('#metrekare-sonucu');
const donumSonucu = document.querySelector('#donum-sonucu');
const tohumSonucu = document.querySelector('#tohum-sonucu');

const hesaplaBtn = document.querySelector('#hesapla-btn');
hesaplaBtn.addEventListener('click', () => {
  const boy = document.querySelector('#tarla-boy-input').value;
  const en = document.querySelector('#tarla-en-input').value;

  const alanMetrekare = boy * en;
  metrekareSonucu.innerHTML = alanMetrekare + ' m²';

  const alanDonum = alanMetrekare / 1000;
  donumSonucu.innerHTML = alanDonum + ' Dönüm';

  tohumSonucu.innerHTML = '<p> Mibzer İle Dikimde Ortalama </p><p style="font-weight: 400;">' + ((alanDonum * 22).toFixed(2)) + ' Kg - ' + ((alanDonum * 24).toFixed(2)) + ' Kg </p><p style="font-weight: 400;">Buğday tohumu</p><p> Serpme İle Dikimde Ortalama</p><p style="font-weight: 400;"> ' + ((alanDonum * 26).toFixed(2)) + ' Kg  - ' + ((alanDonum * 28).toFixed(2)) + ' Kg </p><p style="font-weight: 400;">Buğday tohumu</p><p> Mibzer İle Dikim Yaparak Sizde Tasarruf Edebilirsiniz.</p>';
});