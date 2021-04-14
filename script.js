function getCovidRepos(){
    const url = 'https://api.github.com/search/repositories?q=covid+in:name+stars:>2000+sort:stars&page=1&per_page=5'
    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{
        const items = res.items
        output(items,'covid-repos')
    })
}
function getCoronaRepos(){
    const url = 'https://api.github.com/search/repositories?q=corona+in:name+stars:<1400+sort:stars&page=1&per_page=5'
    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{
        const items = res.items
        output(items,'corona-repos')
    })
}
function output(arr,id){
    body = document.getElementById(id)
    //removeAllChildNodes(body)
    for(let i=0;i<arr.length;i++){
        let row  = document.createElement("DIV")
        row.className='row full-width cust-height border'
        
        let name = document.createElement('DIV'); name.className='col'; name.innerHTML= arr[i].name
        let desc = document.createElement('DIV'); desc.className='col'; 
        desc.innerHTML= arr[i].description.length<20? arr[i].description: arr[i].description.slice(0,21)+'...'
        let owner = document.createElement('DIV'); owner.className='col '; owner.innerHTML= arr[i].owner.login
        let img = document. createElement('IMG'); img.setAttribute('src', arr[i].owner.avatar_url)
        let pfp = document.createElement('DIV'); pfp.className='col'; pfp.appendChild(img)

        row.appendChild(name);row.appendChild(desc);row.appendChild(owner);row.appendChild(pfp)
        body.appendChild(row)
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}