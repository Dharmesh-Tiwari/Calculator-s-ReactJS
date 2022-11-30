
const Calculator1=()=>
{
const Mycal=()=>
{
  let no1=parseInt(document.getElementById('no1').value);
  let no2=parseInt(document.getElementById('no2').value);
  let ch=document.getElementById('ch').value;
  
  if (ch=="+")
  {
    var ans=no1+no2;
  }
  else
  if(ch=="-")
  {
    var ans=no1-no2;
  }
  else
  if(ch=="/")
  {
    var ans=no1/no2;
  }
  else
   if(ch=="*")
   {
    var ans=no1*no2;
   }
   else
   {
    ans="invalid choise";
   }

   document.getElementById('myans').innerHTML="Ans:"+ans;
  }
 
return(
  <>
  <h1 style={{color:"red"}} >Normal calculator</h1>
  <h2 style={{color:"red"}} >Enter no 1</h2>:<input type="text" id="no1" />
  <br />
  <h2 style={{color:"red"}} >Enter no 2</h2>:<input type="text" id="no2" />
  <br />
  <h2 style={{color:"red"}} >Enter Choice</h2> :<input type="text" id="ch"/>
  <br />
  <input type="button" onClick={Mycal} value="Answer" />
  <h2 id="myans" style={{color:"red"}} >Answer Here!</h2>
  
  
  </>
);
}
export default Calculator1;