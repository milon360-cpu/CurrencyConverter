const convertButton = document.getElementById('convert-btn');
convertButton.addEventListener('click',function(event)
{
  
    const tk = document.getElementById('bdt').value;
    const convertTk = parseFloat(tk);
    const indiaChecked = document.getElementById('india').checked;
    const usaChecked = document.getElementById('USA').checked;
    const japanChecked = document.getElementById('Japan').checked;
    const chinaChecked = document.getElementById('China').checked;
    const saudiArabiaChecked = document.getElementById('Saudi-Arabia').checked;
    const sarbiaChecked = document.getElementById('Sarbia').checked;
    const turkeyChecked = document.getElementById('Turkey').checked;
    const southAfricaChecked = document.getElementById('South-Africa').checked;
    const southKoreaChecked = document.getElementById('South-Korea').checked;
    const brazilChecked = document.getElementById('Brazil').checked;

    if(indiaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.87;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK = ${convert} Rupee`;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(usaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.012;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} $(Dollar)`;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(japanChecked==true && convertTk>0)
    {
            let convert = convertTk * 1.33;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Yen `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(chinaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.075;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Yuan `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(saudiArabiaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.044;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Rial `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(sarbiaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.044;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Rial `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(turkeyChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.043;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} SAR `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(southAfricaChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.18;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Rand `;
            const tk = document.getElementById('bdt').value = '';
    }
    else if(brazilChecked==true && convertTk>0)
    {
            let convert = convertTk * 0.065;
            convert = convert.toFixed(2);
            document.getElementById('convert-result').innerText = `${convertTk} TK  =  ${convert} Real `;
            const tk = document.getElementById('bdt').value = '';
    }

})