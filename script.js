    let fileInput = document.querySelector("input")
let downloadBtn = document.querySelector("button")

downloadBtn.addEventListener('click',()=>{
    console.log(fileInput.value)
    downloadBtn.textContent = "Downloading...."
    fetchFile(fileInput.value)

})


function fetchFile(url){
    //fetching file and returing response as blob
fetch(url).then(res=>res.blob().then(
    file => {
        //URL.createObjectURL is used to create a url of passes object
let tempurl = URL.createObjectURL(file)
        console.log(tempurl)
let atag = document.createElement("a")
atag.href = tempurl//passing tempurl as href value
atag.download = "filename"//passing filename to download attribute value
document.body.appendChild(atag)
atag.click()//clicking anchor tag ,file will download
atag.remove()//removing anchor tag after file download 
URL.revokeObjectURL(tempurl)//removing tempurl from document
downloadBtn.textContent = "Download File"



}
)).catch(
    () => alert("Failed To download")
    
)




}






