const observer = new IntersectionObserver ((section)=>{
    section.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const element = document.querySelectorAll('.hidden')
element.forEach((element)=>observer.observe(element))

