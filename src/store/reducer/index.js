

const INITIAL_STATE = {
  array:[],
  column:[],
 }





export default (state = INITIAL_STATE, action) => {
 
switch (action.type) {
  case "column_data":
   {
 

   return({
     ...state,
    column:[...state.column,action.payload]
   })
  }
  break;


   case "info":
{

      
      return({
     
      ...state,
      array:[...state.array,action.payload]
    })
    }
    break


    case "null":
    {
      
      return({
        ...state,
    array:[]
      })
      
      break
      
     }

     case "empty":
      {
        
console.log("",action);       
        
        break
        
       }
   
   
     
  default:
    return state; 
  }
  
  
  return state; 
}