async function convert() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const res = await data;
    const amd = res.Valute.AMD.Value/100;
    const usd = res.Valute.USD.Value;
    const eur = res.Valute.EUR.Value;
    const gbp = res.Valute.GBP.Value;
    const cny = res.Valute.CNY.Value;
    const jpy = res.Valute.JPY.Value;
    document.getElementById('amd').innerHTML = amd.toFixed(4);
    document.getElementById('usd').innerHTML = usd.toFixed(4);
    document.getElementById('eur').innerHTML = eur.toFixed(4);
    document.getElementById('gbp').innerHTML = gbp.toFixed(4);
    document.getElementById('cny').innerHTML = cny.toFixed(4);
    document.getElementById('jpy').innerHTML = jpy.toFixed(4);
    console.log(res);
};
convert();

async function Function() {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const res = await data;
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
        let num = document.getElementById("num").value;
        let valute_from = '';
        let valute_to = '';
        switch (input1) {
            case 'Дирхам ОАЭ':
                valute_from = res.Valute.AED.Value;
                break;
            case 'Армянских драмов':
                valute_from = res.Valute.AMD.Value/100;
                break;
            case 'Австралийский доллар':
                valute_from = res.Valute.AUD.Value;
                break;
            case 'Азербайджанский манат':
                valute_from = res.Valute.AZN.Value;
                break;
            case 'Болгарский лев':
                valute_from = res.Valute.BGN.Value;
                break;
            case 'Бразильский реал':
                valute_from = res.Valute.BRL.Value;
                break;
            case 'Белорусский рубль':
                valute_from = res.Valute.BYN.Value;
                break;
            case 'Канадский доллар':
                valute_from = res.Valute.CAD.Value;
                break;
            case 'Швейцарский франк':
                valute_from = res.Valute.CHF.Value;
                break;
            case 'Китайский юань':
                valute_from = res.Valute.CNY.Value;
                break;
            case 'Чешских крон':
                valute_from = res.Valute.CZK.Value;
                break;
            case 'Датская крона':
                valute_from = res.Valute.DKK.Value;
                break;
            case 'Египетских фунтов':
                valute_from = res.Valute.EGP.Value;
                break;
            case 'Евро':
                valute_from = res.Valute.EUR.Value;
                break;
            case 'Фунт стерлингов Соединенного королевства':
                valute_from = res.Valute.GBP.Value;
                break;
            case 'Грузинский лари':
                valute_from = res.Valute.GEL.Value;
                break;
            case 'Гонконгский доллар':
                valute_from = res.Valute.HKD.Value;
                break;
            case 'Венгерских форинтов':
                valute_from = res.Valute.HUF.Value;
                break;
            case 'Индонезийских рупий':
                valute_from = res.Valute.IDR.Value;
                break;
            case 'Индийских рупий':
                valute_from = res.Valute.INR.Value;
                break;
            case 'Японских иен':
                valute_from = res.Valute.JPY.Value;
                break;
            case 'Киргизских сомов':
                valute_from = res.Valute.KGS.Value;
                break;
            case 'Вон Республики Корея':
                valute_from = res.Valute.KRW.Value;
                break;
            case 'Казахстанских тенге':
                valute_from = res.Valute.KZT.Value;
                break;
            case 'Молдавских леев':
                valute_from = res.Valute.MDL.Value;
                break;
            case 'Норвежских крон':
                valute_from = res.Valute.NOK.Value;
                break;
            case 'Новозеландский доллар':
                valute_from = res.Valute.NZD.Value;
                break;
            case 'Польский злотый':
                valute_from = res.Valute.PLN.Value;
                break;
            case 'Катарский риал':
                valute_from = res.Valute.QAR.Value;
                break;
            case 'Румынский лей':
                valute_from = res.Valute.RON.Value;
                break;
            case 'Сербских динаров':
                valute_from = res.Valute.RSD.Value;
                break;
            case 'Шведских крон':
                valute_from = res.Valute.SEK.Value;
                break;
            case 'Сингапурский доллар':
                valute_from = res.Valute.SGD.Value;
                break;
            case 'Таиландских батов':
                valute_from = res.Valute.THB.Value;
                break;
            case 'Таджикских сомони':
                valute_from = res.Valute.TJS.Value;
                break;
            case 'Новый туркменский манат':
                valute_from = res.Valute.TMT.Value;
                break;
            case 'Турецких лир':
                valute_from = res.Valute.TRY.Value;
                break;
            case 'Украинских гривен':
                valute_from = res.Valute.UAH.Value;
                break;
            case 'Доллар США':
                valute_from = res.Valute.USD.Value;
                break;
            case 'Узбекских сумов':
                valute_from = res.Valute.UZS.Value;
                break;
            case 'Вьетнамских донгов':
                valute_from = res.Valute.VND.Value;
                break;
            case 'СДР (специальные права заимствования)':
                valute_from = res.Valute.XDR.Value;
                break;
            case 'Южноафриканских рэндов':
                valute_from = res.Valute.ZAR.Value;
                break;
            case 'Российский рубль':
                valute_from = 1;
                break;
            default:
                alert( "Нет значений начальной валюты" );
        };
        switch (input2) {
            case 'Дирхам ОАЭ':
                valute_to = res.Valute.AED.Value;
                break;
            case 'Армянских драмов':
                valute_to = res.Valute.AMD.Value/100;
                break;
            case 'Австралийский доллар':
                valute_to = res.Valute.AUD.Value;
                break;
            case 'Азербайджанский манат':
                valute_to = res.Valute.AZN.Value;
                break;
            case 'Болгарский лев':
                valute_to = res.Valute.BGN.Value;
                break;
            case 'Бразильский реал':
                valute_to = res.Valute.BRL.Value;
                break;
            case 'Белорусский рубль':
                valute_to = res.Valute.BYN.Value;
                break;
            case 'Канадский доллар':
                valute_to = res.Valute.CAD.Value;
                break;
            case 'Швейцарский франк':
                valute_to = res.Valute.CHF.Value;
                break;
            case 'Китайский юань':
                valute_to = res.Valute.CNY.Value;
                break;
            case 'Чешских крон':
                valute_to = res.Valute.CZK.Value;
                break;
            case 'Датская крона':
                valute_to = res.Valute.DKK.Value;
                break;
            case 'Египетских фунтов':
                valute_to = res.Valute.EGP.Value;
                break;
            case 'Евро':
                valute_to = res.Valute.EUR.Value;
                break;
            case 'Фунт стерлингов Соединенного королевства':
                valute_to = res.Valute.GBP.Value;
                break;
            case 'Грузинский лари':
                valute_to = res.Valute.GEL.Value;
                break;
            case 'Гонконгский доллар':
                valute_to = res.Valute.HKD.Value;
                break;
            case 'Венгерских форинтов':
                valute_to = res.Valute.HUF.Value;
                break;
            case 'Индонезийских рупий':
                valute_to = res.Valute.IDR.Value;
                break;
            case 'Индийских рупий':
                valute_to = res.Valute.INR.Value;
                break;
            case 'Японских иен':
                valute_to = res.Valute.JPY.Value;
                break;
            case 'Киргизских сомов':
                valute_to = res.Valute.KGS.Value;
                break;
            case 'Вон Республики Корея':
                valute_to = res.Valute.KRW.Value;
                break;
            case 'Казахстанских тенге':
                valute_to = res.Valute.KZT.Value;
                break;
            case 'Молдавских леев':
                valute_to = res.Valute.MDL.Value;
                break;
            case 'Норвежских крон':
                valute_to = res.Valute.NOK.Value;
                break;
            case 'Новозеландский доллар':
                valute_to = res.Valute.NZD.Value;
                break;
            case 'Польский злотый':
                valute_to = res.Valute.PLN.Value;
                break;
            case 'Катарский риал':
                valute_to = res.Valute.QAR.Value;
                break;
            case 'Румынский лей':
                valute_to = res.Valute.RON.Value;
                break;
            case 'Сербских динаров':
                valute_to = res.Valute.RSD.Value;
                break;
            case 'Шведских крон':
                valute_to = res.Valute.SEK.Value;
                break;
            case 'Сингапурский доллар':
                valute_to = res.Valute.SGD.Value;
                break;
            case 'Таиландских батов':
                valute_to = res.Valute.THB.Value;
                break;
            case 'Таджикских сомони':
                valute_to = res.Valute.TJS.Value;
                break;
            case 'Новый туркменский манат':
                valute_to = res.Valute.TMT.Value;
                break;
            case 'Турецких лир':
                valute_to = res.Valute.TRY.Value;
                break;
            case 'Украинских гривен':
                valute_to = res.Valute.UAH.Value;
                break;
            case 'Доллар США':
                valute_to = res.Valute.USD.Value;
                break;
            case 'Узбекских сумов':
                valute_to = res.Valute.UZS.Value;
                break;
            case 'Вьетнамских донгов':
                valute_to = res.Valute.VND.Value;
                break;
            case 'СДР (специальные права заимствования)':
                valute_to = res.Valute.XDR.Value;
                break;
            case 'Южноафриканских рэндов':
                valute_to = res.Valute.ZAR.Value;
                break;
            case 'Российский рубль':
                valute_to = 1;
                break;
            default:
                alert( "Нет значений итоговой валюты" );
        };
        
        if(valute_to=='Российский рубль'){
            document.getElementById('res').innerHTML = `Итоговая сумма равна ${(valute_from * parseInt(num)).toFixed(4)}`;
        }else if(valute_from=='Российский рубль'){
            document.getElementById('res').innerHTML = `Итоговая сумма равна ${(parseInt(num) / valute_to).toFixed(4)}`;
        }else{
            document.getElementById('res').innerHTML = `Итоговая сумма равна ${((valute_from * parseInt(num)) / valute_to).toFixed(4)}`;
        };
    };