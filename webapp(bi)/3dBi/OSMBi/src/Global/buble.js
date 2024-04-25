
const countrymapping = {"Oman":"https://cdn-icons-png.flaticon.com/512/12361/12361192.png",
"Bahrain":"https://cdn-icons-png.flaticon.com/512/5922/5922029.png",
"United Arab Emirates":"https://cdn-icons-png.flaticon.com/512/5921/5921904.png",
"Yemen":"https://cdn-icons-png.flaticon.com/512/197/197417.png",
"Qatar":"https://cdn-icons-png.flaticon.com/512/197/197618.png",
"Saudi Arabia":"https://cdn-icons-png.flaticon.com/512/5111/5111777.png",
"Iran":"https://cdn-icons-png.flaticon.com/512/11848/11848877.png",
"Morocco":"https://cdn-icons-png.flaticon.com/512/197/197551.png",
"Jordan":"https://cdn-icons-png.flaticon.com/512/197/197595.png",
"Palestine":"https://cdn-icons-png.flaticon.com/512/197/197467.png",
"Iraq":"https://cdn-icons-png.flaticon.com/512/12360/12360720.png",
"Algeria":"https://cdn-icons-png.flaticon.com/512/9906/9906440.png",
"Tunisia":"https://cdn-icons-png.flaticon.com/512/197/197624.png",
"Libya":"https://cdn-icons-png.flaticon.com/512/5111/5111743.png",
"Egypt":"https://cdn-icons-png.flaticon.com/512/11848/11848666.png",
"Djibouti":"https://cdn-icons-png.flaticon.com/512/9906/9906461.png"}




function Showbuble(countryname){
 let content = `
 <img class="flags" alt="" src="${countrymapping[countryname]}">
 `

 return content
}



export {Showbuble}