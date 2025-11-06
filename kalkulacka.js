
document.getElementById('calc').addEventListener('click', function() {
    const casInput = document.getElementById('cas');
    const cas = (casInput.value) * 60;
    const zahrada = document.getElementById('zahrada').checked ? 'ano' : 'ne';
    console.log(cas, zahrada);
    function doporucPsa(zahrada, cas) {
        if (zahrada == 'ne' && cas <= 30) return 'Doporučil bych něco jiného než psa';
        if (zahrada == 'ano' && cas <= 30) return 'Doporučil bych krátkolebé plemeno kromě boxera';
        if (zahrada == 'ne' && cas <= 60 && cas > 30) return 'Doporučil bych společesnké plemeno jako je maltelzký pinč';
        if (zahrada == 'ano' && cas <= 60 && cas > 30) return 'Doporučil bych molosovitá plemena jako je Bernardýn nebo Mastif'; 
        if (zahrada == 'ne' && cas <= 120 && cas > 60) return 'Doporučil bych Pudla, Kokršpaněla nebo chrty';
        if (zahrada == 'ano' && cas <= 120 && cas > 60) return 'Doporučil bych psatevecká plemena';
        if (zahrada == 'ne' && cas > 120 && cas <= 240) return 'Doporučil bych ovčáky nebo lovecká plemena';
        if (zahrada == 'ano' && cas > 120 && cas <= 240) return 'Doporučil bych ovčáky, lovecká plemena a teriéry';
        else return'Doporučil bych najít si nějakou práci místo psa';
    }

    const vysledek = doporucPsa(zahrada, cas);
    document.getElementById('result').innerHTML = `${vysledek}`;
});

