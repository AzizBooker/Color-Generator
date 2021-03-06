const colors=["green",'red',"rgba(133,122,200)","#f15025"]
const hex=[0,1,2,3,4,5,6,7,8,9,"A",'B','C','D','E','F']


genBtn=document.querySelector('#Color-Button')
hexTxt=document.querySelector('#Hex-Color')
aRgbTxt=document.querySelector('#Rgb-Color')

genBtn.addEventListener('click',()=>{
    //Get Random Number between 0 and 3
   updateText()
})

document.addEventListener('keyup',(e)=>{
    if(e.code=="Space"){
        console.log('Space')
        updateText()
    }
})

function updateText(){
    const randomHex=getRandomHex();
    const aRgb=hexToRGB(randomHex)
    document.body.style.backgroundColor=`#${randomHex}`
    hexTxt.textContent=`#${randomHex}`
    aRgbTxt.textContent=`rgb(${aRgb})`;

}
function getRandomHex(){
    const randomHex=['']
    for(let i=0;i <6;i++){
        randomHex.push(hex[Math.floor(Math.random()*hex.length)])
    }
    return randomHex.join('')
}

function hexToRGB(hex){
    if(hex.length!= 6){
        throw 'Only-Six Dgits hex colors are allowed'
    }
var aRgbHex=hex.match(/.{1,2}/g);
var aRgb=[
    parseInt(aRgbHex[0],16),
    parseInt(aRgbHex[1],16),
    parseInt(aRgbHex[2],16)
    
]
//console.log(aRgb)
return aRgb
}

function rgbToHsl (aRgb){
    r=aRgb[0]
    g=aRgb[1]
    b=aRgb[2]
   
   // r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    
    return [h, s, l];

}