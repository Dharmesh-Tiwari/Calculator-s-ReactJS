import "./App.css"
const Calculator2=()=>{
    const BackDel=()=>{
    let mydata=document.getElementById('mytext').value;
    let MyText=mydata.slice(0,-1);
    document.getElementById("mytext").value=MyText;
  }
  return(

    <>
    <div id="layout"  class="mt-5">
    <div class="form-group mt-2">
      <input type="text" id="mytext" class="input" />
      </div>
       <br />

      <button type="button" class="btn btn-outline-dark" id="b1" value="1"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b1").value}>1 </button>

      <button type="button" class="btn btn-outline-dark" id="b2" value="2"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b2").value}>2</button>

      <button type="button" class="btn btn-outline-dark" id="b3" value="3"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b3").value}>3 </button>

      <button type="button" class="btn btn-outline-dark" id="b4" value="4"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b4").value}>4 </button>
      <br />

      <button type="button" class="btn btn-outline-dark" id="b5" value="5"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b5").value}>5 </button>

      <button type="button" class="btn btn-outline-dark" id="b6" value="6"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b6").value}>6 </button>

      <button type="button" class="btn btn-outline-dark" id="b7" value="7"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b7").value}>7 </button>

      <button type="button" class="btn btn-outline-dark" id="b8" value="8"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b8").value}>8 </button>
      <br />

      <button type="button" class="btn btn-outline-dark" id="b9" value="9"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b9").value}>9 </button>

      <button type="button" class="btn btn-outline-dark" id="b0" value="0"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b0").value}>0</button>

      <button type="button" class="btn btn-outline-dark" id="b." value="."
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b.").value}>. </button>

      <button type="button" class="btn btn-outline-dark" id="b=" value="="
      onClick={()=>document.getElementById("mytext").value=
      eval(document.getElementById("mytext").value)}>= </button>
      <br />

      <button type="button" class="btn btn-outline-dark" id="b+" value="+"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b+").value}> + </button>

      <button type="button" class="btn btn-outline-dark" id="b-" value="-"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b-").value}>-</button>

      <button type="button" class="btn btn-outline-dark" id="b*" value="*"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b*").value}>*</button>

      <button type="button" class="btn btn-outline-dark" id="b/" value="/"
      onClick={()=>document.getElementById("mytext").value+=
      document.getElementById("b/").value}> / </button><br />
  <div align="center">
      <button type="button" class="btn btn-outline-dark"
      onClick={BackDel}>Back </button>

      <button type="button" class="btn btn-outline-dark"
      onClick={()=> document.getElementById("mytext").value=""}>Clear all</button>
      </div>
    </div> 
    </>);
}

export default Calculator2;