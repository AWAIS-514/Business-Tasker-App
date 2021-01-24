
import  LinearWithValueLabel from './progressbar/progressbar' 
import React, { Component } from "react";
import {connect} from "react-redux";
import {updateNode,AddColumn,updatethis,ClearAllField,donethis,AddMyColumn,ClearMyColumn,GetData,nulli,getkey,GetColumnData,DeleteNode} from '../../store/acion/index'
import { MdOpenInNew} from "react-icons/md";
import { AiFillEdit,AiFillDatabase,AiFillDelete,AiOutlineFileDone,FiLink2} from "react-icons/ai";



class Seo extends Component{
  constructor(props) {
    super(props);
    this.state = {
    keyMatch:localStorage.getItem('EditKey')
,arr:this.props.array[0]
    }
  }




  componentDidMount() {
    document.body.style.backgroundImage="url('https://img.freepik.com/free-vector/3d-perspective-style-diamond-shape-white-background_1017-27556.jpg?size=626&ext=jpg')"
    this.props.nulli();
      this.props.GetData();
      this.props.GetColumnData();
   }
  





  



render(){
console.log("Props Array",this.props.array);


  return(
  <div> 
    

 <div className="seonav" >

<div className="box" id="mainbutt">
	<a className="button" href="#popup1">Add Coulmn</a>
  
</div >



{/* <div className="dropdown" >
    <button className="dropbtn">Dropdown 
      
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1 link2 link3 link4</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> */}
   
</div>


{/* popup board for add checklist column ******************* */}
<div id="popup1" className="overlay">
	<div className="popup">
		<h2>Add </h2>
		<a className="close" onClick={ClearMyColumn()} href="#">&times;</a>
		<div className="content">
		<form>
            <input type="text" className="input" id="TitleOFColumn" placeholder="CheckList Title......."/>
                </form>


        <div id="buttonSofpopup">
          <button onClick={AddMyColumn()}>Add</button>
          <button onClick={ClearMyColumn()}>ClearAll</button>
        </div>
		</div>
  </div>
  

</div>




{/* ******************************** */}

{/* *****************poup for progress */}

<div id="popup3" className="overlay3">
	<div className="popup3">
		<h2>Progress </h2>
		<a className="close" href="#">&times;</a>

		<div className="content3">
    <h4>All over progress</h4>
   <LinearWithValueLabel />

</div>
		</div>
	</div>
{/* ******************************************** */}

<div className="DashboardHeading">
<p>
DashBoard
</p>
</div>


{/* progress bar */}
<div id="fixedLEft">

<div className="box3">
	<a className="button3" href="#popup3">▁▁▁▁▁▁▁▁▁▁ %</a>
</div>
</div>
{/* progress bar */}



{/* Column space to be added with map */}

<div id="Columnmap">

{this.props.column.map((v,i)=>{

  localStorage.setItem('myK',v.key)

return(
  
  <div key={i} id="columnAdd">
<div id="titleOFColumn">
{v.name}
</div>
<div>
 

{
this.props.array.map((v,i)=>{

  return(
   (localStorage.getItem('myK')===v.key)?
   
  <div key={i} id="innerMap">

<p>{v.Title}</p>
<p>{v.detail}</p>
<div className="flexme">

<div><p><a href={v.Link} target="block"><MdOpenInNew/></a></p></div>
<div className="dropdown" >
    <div  id="bottom" >
  <AiFillDatabase />
    </div>
  <div id="margin">

  <div  className="dropdown-content">
    
      <a onClick={donethis(v.mykey,v,v.key)} href="#"><AiOutlineFileDone /></a>
      <a onClick={DeleteNode(v.mykey)} ><AiFillDelete /></a>
      <div className="box4">
	<a className="button4" onClick={updatethis(v.mykey,v,v.key)}  href="#popup4"><AiFillEdit /></a>
</div>
    </div>

  </div>
  </div>

</div>
</div>

  :
  false
  
  )
})

}

</div>
{/* 2nd map */}






<div  className="addData">






<div className="box1" onClick={()=>getkey(v)}>
	<a className="button1" href="#popup2">+</a>
</div>
 
{/* 2nd popup board  */}



</div>



</div>
)


})}
{/* popup form of add task */}

<div id="popup2" className="overlay1">
	<div className="popup1">
		<h2>Add Task's</h2>
		<a className="close1" onClick={ClearAllField()} href="#2">&times;</a>
		<div className="content1">
		<form>
            <input type="text" className="input"  id="NameOfTitle" placeholder="Add Your Title here.........."/>
            <input type="text" className="input" id="LinkofTitle" placeholder="🔗"/>
           
            <textarea  id="textArea" placeholder="Write something..max-length(50)"  maxlength="50"></textarea>
            <div id="buttonSofpopup">
          <button onClick={AddColumn()}>Add</button>
          <button onClick={ClearAllField()}>ClearAll</button>
        </div>
      
        </form>
		</div>
	</div>
</div>

{/* popup form of add task */}





{/* popup edit */}


<div id="popup4" className="overlay3">
	<div className="popup4">
		<h2>Update Task</h2>
		<a className="close" href="#">&times;</a>
		<div className="content1">
		<form>
            <input type="text" className="input" id="title1"  placeholder="Update Your Title here.........."/>
            <input type="text" className="input" id='link1' placeholder="🔗"/>
           
            <textarea  id="textArea1" placeholder="Write something..max-length(50)"  maxlength="50"></textarea>
            <div id="buttonSofpopup">
          <button  onClick={updateNode()}>Update</button>
          <button >ClearAll</button>
        </div>
      
        </form>
		</div>
		</div>
	</div>


{/* popup edit */}
{/* popup edit */}




</div>





</div>


 

    
  )
}

}
const mapStateToProps = (state ) => {
  return {
 column:state.column,
name:state.name,
 array:state.array
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
  
     AddColumn: () => {
       dispatch(AddColumn())
     },
    ClearAllField: () => {
      dispatch(ClearAllField())
    }
    ,
    
    AddMyColumn: () =>{
      dispatch(AddMyColumn())
    },
    ClearMyColumn:()=>{
      dispatch(ClearMyColumn())
    },
    GetData:()=>{
      dispatch(GetData())
    },
    
    nulli:()=>{
      dispatch(nulli())
    }
,
    getkey:()=>{
      dispatch(getkey())
    },
    GetColumnData:()=>{
      dispatch(GetColumnData())
    }
  ,
  DeleteNode:()=>{
    dispatch(DeleteNode())
  }
  ,
 
  donethis:()=>{
    dispatch(donethis())
  }
  ,updatethis:()=>{
    dispatch(updatethis())
  },
  updateNode:()=>{
    dispatch(updateNode())
  }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Seo);