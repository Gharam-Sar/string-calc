
function Add(nums){
  let num_array=nums.split(",");
  let len=num_array.length;
    switch (len){
      case 1:
        if(num_array[0]=="")
        return '0';
        else {
          if (parseInt(num_array[0])>=0)
            {if(parseInt(num_array[0])>1000)
               num_array[0]="0";
            return parseInt(num_array[0]);
            }
       
          else throw new Error('negatives not allowed,you entered'+ num_array[0]);

        }
       
      case 2:
        if (parseInt(num_array[0])<0 && parseInt(num_array[1])>=0)
        throw new Error('negatives not allowed,you entered'+ num_array[0]);
        else if (parseInt(num_array[1])<0 && parseInt(num_array[0])>=0)
        throw new Error('negatives not allowed,you entered'+ num_array[1]);
        else if (parseInt(num_array[0]<0) && parseInt(num_array[1])<0)
        {        throw new Error('negatives not allowed,you entered'+ num_array[0]+"," + num_array[1]);
}
        else 
        {
          if(parseInt(num_array[1])>1000)
          num_array[1]="0";
          if(parseInt(num_array[0])>1000)
          num_array[0]="0";
return parseInt(num_array[0])+parseInt(num_array[1]);

        }

    }
    return "args are not valid, try again"
    
}
module.exports = Add;