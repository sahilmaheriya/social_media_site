const searchInput = document.getElementById('search-input')
const searchForm = document.getElementById('search-form')
const resultBox = document.getElementById('result-box')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value


const sendSearchData = (profile) =>{
    $.ajax({
        type:'POST',
        url:'search_profile/',
        data:{
            'csrfmiddlewaretoken':csrf,
            'profile':profile
        },
        success: (res)=>{
            console.log(res.data);
            const data = res.data
            if(Array.isArray(data)){
                data.forEach(profile=>{
                    resultBox.innerHTML = ""
                    resultBox.innerHTML +=
                    `
                        <a href="${profile.url}">
                            <div class="row mt-2 mb-2 align-items-center">
                                <div class="col-2">
                                    <img src="${profile.avatar}" class="search-img">
                                </div>
                                <div class="col-10">
                                    <h4>${profile.user}</h4>
                                </div>
                            </div>
                        </a> 
                    ` 
                })
            }
            else{
                if (searchInput.value.length > 0){
                    resultBox.innerHTML = 
                    `
                        <b class="m-4">${data}</b>
                    `
                }
                else{
                    resultBox.classList.add('d-none')
                }
            }
        },
        error: (err)=> {
            console.log(err);
        }
    })
}

searchInput.addEventListener('keyup', e => {
    console.log(e.target.value);
    if(resultBox.classList.contains('d-none')){
        resultBox.classList.remove('d-none')
    }

    sendSearchData(e.target.value)
})
