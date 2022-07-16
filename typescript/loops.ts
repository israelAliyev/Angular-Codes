let sehirler = ["Baku" , "Istanbul"]

for (const index in sehirler) {
  console.log(index);
  
}

for (const iterator of sehirler) {
    console.log(iterator);
    
}


sehirler.forEach(element => {
    console.log(element);
    
});