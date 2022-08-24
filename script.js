const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadBtn.innerText = "Download File";
    fetchfile(fileInput.value);})

function fetchfile(url){
    fetch(url)
    .then(res =>res.blob())
    .then(file=>{
    let urlfile =URL.createObjectURL(file);
    let atag = document.createElement("a");
    atag.href=urlfile;
    atag.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(atag)
    atag.click()
    downloadBtn.innerText = "Download File";
    atag.remove()
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";});}