const form = document.querySelector('#searchForm');
const res = document.querySelector('#tblreslt');
var upd;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype = form.elements.cointype.value;
    fetchprice(ctype);
});
const fetchprice = async(ctype)=>{
const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
console.log(r.data.coin.price);
const price =r.data.coin.price;
const name = r.data.coin.name;
const change = r.data.coin.priceChange1w;
//const time = r.data.coin.t;
const volume = r.data.coin.volume;
const marketcap = r.data.coin.marketCap ;

res.innerHTML = `<tr id ="trc">
<td>
    PROPERTY
</td>
<td>
    VALUE
</td>
</tr>
<tr>
<td>
    ${name} 
</td>
<td>
    ${price} INR
</td>
</tr>
<tr>
<td>
    change
</td>
<td>
    ${change}
</td>
</tr>
<tr>
<td>
    marketCap
</td>
<td>
    ${marketcap}
</td>
</tr>
<tr>
<td>
    volume
</td>
<td>
    ${volume}
</td>
</tr>`
upd = setTimeout(() =>fetchprice(ctype),10000)
}


