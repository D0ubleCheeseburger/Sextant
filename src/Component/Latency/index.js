import React from 'react'
function Latency() {
  const [n,setN] = React.useState(0);
  const websocket = new WebSocket("ws://localhost:55455");
  React.useEffect(()=> {
    websocket.onmessage = (e)=>{
      // console.log(e.data);
      var d = new Date();
      setN(d.getTime()-e.data);
    }
  },[]);
  
  return (
    <div className="IP">
      Latency: {n}ms
    </div>
  )
}
export default Latency;