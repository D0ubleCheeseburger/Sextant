import axios from 'axios'
import React from 'react'
function IP(props) {
  // var http = require('http');
  const [ip,setIP] = React.useState("");
  React.useEffect(()=>{
    axios.get("https://api64.ipify.org")
    .then((response)=> {
      console.log(response);
      setIP(response.data);
      //console.log(ipaddress);
    })
  },[]);
    return props.type==='ipv4' ? (
      <div className='IP'>
        IPV4: {ip}
      </div>
    ):(
      <div className='IP'>
        IPV6: {ip}
      </div>
    );
}
export default IP;