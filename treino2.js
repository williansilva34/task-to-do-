

const div1= document.querySelector(".div1")

const div2= document.querySelector(".div2")

var btn = document.querySelector("button");


var cursos = ["Html","css","Javascript","Node.js"];

var add = document.getElementById("add");

var remover = document.getElementById("remo");

var ver = document.getElementById("selec")


var antes = document.getElementById("antes")

var depois = document.getElementById("depois")

var indice = 0;


var input = document.querySelector("input");



const tirar  = ()=>{



    const selecionados = [...document.querySelectorAll(".nice")]


    selecionados.map((el)=>{

        el.classList.remove("nice")

    })

}

var criar  = (curso)=>{

    
    var div = document.createElement("div");

    div.innerHTML = curso;
  
    div.classList.add("divs")
  

    div.addEventListener("click",(evt)=>{   
      tirar()
        evt.target.classList.toggle("nice")

    })

    div.setAttribute("id","Nice"+indice)

    return  div;

}

cursos.map((el ,chave)=>{

var novo = criar(el)

    div2.appendChild(novo);

    indice++

})

ver.addEventListener("click",(evt)=>{

    var all = [...document.querySelectorAll("input[type=radio]")]


    all =all.filter((el)=>{

        return el.checked

    })

    all = all[0];


    
    const cursos = all.parentNode.firstChild.textContent;

    alert("Curso selecionado : "+ cursos)
  
})

const Selec = ()=>{

   
    const selecionados = [...document.querySelectorAll(".nice")]



    return selecionados[0]
}




remover.addEventListener("click",()=>{

  const radioselec = Selec();


  radioselec.remove()

})

antes.addEventListener("click",(evt)=>{ 

    var novopai =  criar(input.value)

    const radioselec = Selec();



    div2.insertBefore(novopai,radioselec)


})

depois.addEventListener("click",(evt2)=>{

    var novopai =  criar(input.value)

    const radioselec = Selec();



    div2.insertBefore(novopai,radioselec.nextSibling)




})