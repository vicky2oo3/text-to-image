//const API_KEY="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"
//vicky
//const API_KEY="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"
const API_KEY="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"
const submitIcon =document.querySelector("#submit-icon")
const inputElements=document.querySelector("input")
const imageSection =document.querySelector('.images-section')


const getImages =async()=>{
    const options ={
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            prompt:inputElements.value,
            n:4,
            size:'1024x1024'
        })
    }
    try{
       const response= await fetch("https://api.openai.com/v1/images/generations", options)
   const data= await response.json();
   if (data && data.data && data.data.length > 0) {
   data?.data.forEach(imageObiect =>{
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const imageElement =document.createElement("img");
    imageElement.setAttribute("src",imageObiect.url);
    imageContainer.append(imageElement);
    imageSection.append(imageContainer);
});

} else {
    console.error("No image data found in the response.");
}

    } catch(error)
    {
        console.error(error.message);
    }
}
submitIcon.addEventListener('click',getImages);