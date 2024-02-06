function AnaToVori(Ana){
    if(typeof Ana !== "number" || Ana < 0){
        return "Please provide a valid positive integer number!"
    }
    const Vori = Ana * 0.0625;
    return Vori;
}
console.log(AnaToVori(116));