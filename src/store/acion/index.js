import { TimeToLeave } from "@material-ui/icons";
import firebase from "../../cofig/firebase";






// *****************************
// function for google login

  const google=(data)=>{
 
    return (dispatch)=>
      {  
  
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
        
          // The signed-in user info.
          var user = result.user;
   
         
        
           var userData={
  name:user.displayName,
  email:user.email,
  uid:user.uid
           }
          console.log(userData);
         
  
         
        firebase.database().ref('/').child('/Users/AI').push(userData)
          // dispatch({ type:'app_data',payload:userData})
          localStorage.setItem('name',userData.name)
          localStorage.setItem('email',userData.email)
          localStorage.setItem('key',userData.uid)
          data.push('/seo')
        }).catch(function(error) {
          // Handle Errors here.
         
          var errorMessage = error.message;
          // The email of the user's account used.
        console.log("Error",errorMessage);
          // ...
        });
  
      
     }
    }


// ******************************************************************************************

    // Function for goto other component from login to coustomizeEmailVerificarion
const gotoEmail=(data)=>{
  return (dispatch)=>
  {  
    data.push('/CustomEmailVerification')

  }}
  //  *********************************************************************************

// function for email send verification link
const Email=(data)=>{
  return (dispatch)=>
  {  
    

    let UserName=document.getElementById('VerificationName').value
    let UserEmail=document.getElementById('VerificationEmail').value

    localStorage.setItem('name',UserName)
    localStorage.setItem('email',UserEmail)


var actionCodeSettings = {
  
  url: 'https://seohmcp.firebaseapp.com/seo',

  

  handleCodeInApp: true,

};

firebase.auth().sendSignInLinkToEmail(UserEmail, actionCodeSettings)
  .then(() => {
    console.log("sucessfull");
  localStorage.setItem('emailForSignIn',UserEmail);
 // ...
 alert('Goto Your Email Account and check Inbox,Spam,etc')
  })
  .catch((error) => {
 
    var errorMessage = error.message;
    // ...
    
    
console.log("Eror",errorMessage);
  });


  }
}
   
// ******************************************************************************************

// Function for Register a user

const registerUser=(data)=>{
  return(dispatch)=>{
  console.log("running");
  let UserName=document.getElementById('nameUser').value
  let UserEmail=document.getElementById('emailUser').value
  let passWord1=document.getElementById('passWord1').value
  let passWord2=document.getElementById('passWord2').value
alert('Check your email for verification Link ')
let Ukey=firebase.database().ref('/').child('/child').push().key

  var userData={
    name:UserName,
    email:UserEmail,
    key:Ukey,
    password:passWord1

             }

  //  password Checker
 if(passWord1!==passWord2)
{
alert('Password Mismatch Kindly Try Again')

}

// Empty Form checker


if( UserName === ""  || UserEmail ===""  || passWord2 ===""  || passWord1 ===""){

  alert("Please Fill all Entries")
 
}
console.log("key",Ukey);

if( UserName !== "" && UserEmail !=="" && passWord2 !==""  && passWord1 !=="" && passWord1===passWord2)
{
firebase.database().ref('/').child(`Users/${Ukey}`).set(userData)


localStorage.setItem('name',userData.name)
localStorage.setItem('email',userData.email)
localStorage.setItem('key',userData.key)
}

     }
  }
// ********************************************************************************************
// Function for clear value's of registration
  const EmptyFieldLogin=()=>{


    return(dispatch)=>{

    let UserName=document.getElementById('nameUser').value=""
    let UserEmail=document.getElementById('emailUser').value=""
    let passWord1=document.getElementById('passWord1').value=""
    let passWord2=document.getElementById('passWord2').value=""
  

  
       }
    }

// *******************************************************************************************
// Function for login to my account 

  const loginTOmyAccount=(data)=>{
    return(dispatch)=>{
       let body=document.body.style.opacity=0.7


      let LoginName=document.getElementById('LoginName').value
      let UserPassword=document.getElementById('LoginPassword').value


    

  firebase.database().ref('/').child('Users/').on('value',function(v){
v.forEach(v => {
console.log(v.val().name);
console.log(v.val().password);
if(v.val().name===LoginName && v.val().password==UserPassword){
  console.log("MAtch",v.val());
data.push('/seo')
localStorage.setItem('name',v.val().name)
localStorage.setItem('email',v.val().email)
localStorage.setItem('key',v.val().key)
let body=document.body.style.opacity=1

}
else{
  let body=document.body.style.opacity=1




}
});



  })
    }
    
  } 
  

  ///////////////////////////////////////////////*



// function for add column
 const AddColumn=(data)=>{
  return (dispatch)=>
  {  
    let keyof=localStorage.getItem('key')
    let colKey=localStorage.getItem('EditKey')
  console.log("colkey",colKey);
  let key=firebase.database().ref('/').child(`UserColDetils/`).push().key
  let NameOfTitle=document.getElementById('NameOfTitle').value;
  console.log(NameOfTitle);
 let LinkofTitle=document.getElementById('LinkofTitle').value;
 console.log(LinkofTitle);
 let textArea=document.getElementById('textArea').value;
 console.log(textArea);

let obj={
  Title:NameOfTitle,
  Link:LinkofTitle,
  detail:textArea,
  key:colKey,
  mykey:key,
  done:0
  
}


 firebase.database().ref('/').child(`UserColDetils/${keyof}/${key}`).set(obj)





  }}





  // function to clear upper field's

  
  const ClearAllField=(data)=>{
    return (dispatch)=>
    {  
    let NameOfTitle=document.getElementById('NameOfTitle').value="";

   let LinkofTitle=document.getElementById('LinkofTitle').value="";
   
   let textArea=document.getElementById('textArea').value="";
  
    }}
  
   


      const AddMyColumn=(data)=>{
        return (dispatch)=>
        {  
          let key=localStorage.getItem('key')
         let fkey= firebase.database().ref('/').child(`/UserData`).push().key
        
          let TitleofColumn=document.getElementById('TitleOFColumn').value;
          let data={

            name:TitleofColumn,
            key:fkey
          }
         firebase.database().ref(`/UserData /${key}/`).child(`${fkey}`).set(data)

      

          }
        
        
        
        }


          const ClearMyColumn=(data)=>{
            return (dispatch)=>
            {  
           
              console.log("it is working now");
    
                    let TitleofColumn=document.getElementById('TitleOFColumn').value="";
              }}
    
              const GetData=(data)=>{
                return (dispatch)=>
                {  
               let key=localStorage.getItem('key')
               
                  firebase.database().ref('/').child(`/UserData /${key}/`).on('child_added',function(v) {

              
                 
                    dispatch({ type:'column_data',payload:v.val()})
                 
                 
                
                    
                  })
        
                       
                  }}
        



                  const nulli=()=>{
                    return(dispatch)=>{
                    
                      
                        dispatch({ type:'null'})
                        
                      
                      }
                  
                   
                    }
 const  getkey=(v)=>{
                     localStorage.setItem('EditKey',v.key)
 }






//  ********************************************************
  
 const   GetColumnData=(v)=>{
 return(dispatch)=>{
                    
  localStorage.setItem('done',0)                    
 firebase.database().ref('/').child(`UserColDetils/${localStorage.getItem('key')}`).on("value",function(v) {

  dispatch({ type:'null'})


let i='0'
  console.log("v.val()",v.val());
v.forEach(v => {

if(v.val().done===1){
  i++;
  console.log("1",i);
  localStorage.setItem('v',i)

}
dispatch({ type:'info',payload:v.val()})
});

 })
               
                      
                    
                    }
                     
                        }


// *****************************
// function to delete a node of column



  
const   DeleteNode=(i)=>{
return(dispatch)=>{
 let Userkey=localStorage.getItem('key')

   


firebase.database().ref('/').child(`UserColDetils/${Userkey}/${i}`).remove()

 

 }
  
     }




// *********************************************************




// function to edit a node of column



  

  
    const donethis=(key,v,parentkey)=>{
        return(dispatch)=>{
    
        
       let user=localStorage.getItem('key')
     let title=v.Title;
let link=v.Link;
let des=v.detail;
 let keyp=parentkey; 
   localStorage.setItem('currentParent',keyp)
    let obj={
      Title:title,
      Link:link,
      detail:des,
      key:keyp,
      mykey:key,
      done:1
      
    }
    
    firebase.database().ref('/').child(`UserColDetils/${user}/${key}`).set(obj)
    
         }
          
        }
  // *********************************************************




const updatethis=(key,v,parentkey)=>{
    return(dispatch)=>{
    console.log("done node fun foo");
    
  let title=document.getElementById('title1').value=v.Title;
  let link=document.getElementById('link1').value=v.Link;
  let des=document.getElementById('textArea1').value=v.detail
localStorage.setItem('updateME',key)
let keyp=parentkey; 
localStorage.setItem('currentParent',keyp)
     }
      
    }

const updateNode=()=>{
  return(dispatch)=>{
  console.log("done node fun foo");
  let key=localStorage.getItem('key')
let title=document.getElementById('title1').value;
let link=document.getElementById('link1').value;
let des=document.getElementById('textArea1').value;
let mkey=localStorage.getItem('currentParent')
let updateThis=localStorage.getItem('updateME')

let obj={

  Link:link,
  Title:title,
  detail:des,
  key:mkey,
  done:0,
  mykey:updateThis

}
console.log("obj",obj);


firebase.database().ref('/').child(`UserColDetils/${key}/${updateThis}/`).set(obj)
   }
    
  }




  // function to send email while signin


 






// ================================================================

export {
  gotoEmail,
  AddColumn,
    google,
    registerUser,
    EmptyFieldLogin,
    loginTOmyAccount,
    Email,ClearAllField,
    DeleteNode,
    AddMyColumn,
    ClearMyColumn,GetData,nulli,
    getkey,
    GetColumnData,
    donethis,updatethis,updateNode
}