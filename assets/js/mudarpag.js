const pags = document.querySelector('.outras-pags')
const portifolio = document.querySelector('.portifolio')
//
const experiencias = document.querySelector('.experiencias')
//
const containe = document.querySelector('.containe')
const container = document.querySelector('.container')
const containerex= document.querySelector('.experiencia')
containe.removeChild(container)
containe.removeChild(containerex)

pags.addEventListener('click',(e)=>{
    const el = e.target
    
    if( el.classList.contains('portifolio')== portifolio.classList.contains('portifolio')){
        console.log('opa')
        e.preventDefault();
        
        carregaPag(el);
        
    }
    else if(el.classList.contains('experiencias') == experiencias.classList.contains('experiencias')){
        console.log('opa1')
        e.preventDefault();
        carregaPag1(el);
        
       
    }
})



const carregaPag = (e)=>{
    
    
    containe.appendChild(container)

    containe.removeChild(containerex)
    
    
    
}

const carregaPag1 = (e)=>{
    
    containe.appendChild(containerex)
    containe.removeChild(container)
    
    
}
