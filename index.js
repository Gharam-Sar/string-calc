
function Add(nums){
  let num_array=nums.split(",");
  let len=num_array.length;
    switch (len){
      case 1:
        if(num_array[0]=="")
        return '0';
        else
        return parseInt(num_array[0]);
      case 2:
        return parseInt(num_array[0])+parseInt(num_array[1]);
    }
    return "args are not valid, try again"
    
}
module.exports = Add;