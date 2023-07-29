const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.getElementById("seach-btn");
const val = document.getElementById("value-word")
const result = document.getElementById("result");

btn.addEventListener("click",()=>{
    let inp = document.getElementById("form-input");
    console.log(inp.value)
    fetch(`${url}${inp.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        result.innerHTML = `
        <div class="word-block ">
                    <h2 class="mt-8 text-[30px] font-bold capitalize" id="value-word"> 
                        ${data[0].word}
                    </h2>
                    <h3 class="flex text-sm text-[#cbd5e1] font-light">
                        <p class="pr-2">
                            ${data[0].meanings[0].partOfSpeech}
                        </p>
                        
                        <p class="">
                            ${data[0].phonetic}
                        </p>
                    </h3>
                </div>

                <p class="my-8">${data[0].meanings[0].definitions[0].definition}</p>
                
                <div class="border-l-4 border-[#4682A9] h-auto mb-8 px-2">
                    <p>${data[0].meanings[0].definitions[0].example || ""} </p>
                </div>
        `
    }).catch(() => {
        result.innerHTML =`<h3 class="text-2xl text-center" >NO WORD FOUND</h3>`
    })
})