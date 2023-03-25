const container = document.querySelector('.coin-container')
const filterContainer= document.querySelector('.filter-container')
const filterField= document.querySelector('.filter-fields')


let Data =[]

function fetchData(){
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res=>res.json()).then(data=>{
        console.log(data)
        display(data)
    })
}
fetchData()


function display(data){
    Data=[...data]
    container.innerHTML=""
    data.forEach((coin)=>{
        const coinEl =document.createElement('div')
        
        coinEl.innerHTML=`
        <div class="card">
            <img src="${coin.image}" class="image" alt="">
            <div class="card-body">
                <h2>${coin.name}</h2>
                <h3>${coin.symbol}</h3>

            </div>
        </div>
        `
        container.appendChild(coinEl)
    })
   
}


function searchInputValue(searchValue)
{
    console.log(searchValue)

    var filterData = Data.filter((val)=>{
        if(val.name.toLowerCase().includes(searchValue.toLowerCase()))
        {
            return val
        }
    })
    console.log(filterData)
    display(filterData)
    filterField.innerHTML="Refresh to Search More"
}