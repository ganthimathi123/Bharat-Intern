

window.addEventListener('load',()=>{
    let allTab = document.querySelectorAll('.tab');
    let allproject = document.querySelectorAll('.project');


    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click',(event)=>{
            removeActive();
            tab.classList.add('tab-active');

            let filterName = event.target.getAttribute('data-name');
            allproject.forEach(project=>{
                let projectName = project.getAttribute('data-name');
                if((projectName == filterName) || filterName == 'All'){
                    project.style.display = 'block';
                }
                else{
                    project.style.display = 'none';
                }
            })
        });

    })

})

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-scroll', window.scrollY>0);
});

let typed = new Typed('.typed-text', {
    strings: ['Web Developer', 'Apps Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
}) 