const url ='https://api.github.com/users/osvaldosoares-hub'
const nome = document.querySelector('.name')
const img_user = document.querySelector('.user-img') 
const link = document.querySelector('.link')

axios(url).then(response => carregarPag(response.data))

const carregarPag = (data)=>{
    img_user.src= data.avatar_url
    nome.textContent = data.name
    link.href = data.html_url
}