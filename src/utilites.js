export const generateNumbersRange = (from, to) => {
    const result = [];
  
    for (let i = from; i <= to; i++) {
      result.push(i);
    }
    return result;
  };

  export const check = (elem) => {
    let num = elem;
    num < 10 ? num = `0${num}` : num;
    return num;
  };

  // checkForLine=(now , date,time)=>{
  //   if(moment(now ).format("YYYY-MM-DD") == date.format("YYYY-MM-DD")
  //   &&moment(now).format("H")<= time
  //   &&moment(now).format("H")>= time ){
      
  //     return true
  //   }

  //   return false
  // }