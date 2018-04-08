import React from "react";

const SecondsTop = ({title})=>[
       <div className="top" key='top1'>
          <i className='bd_logo1' />
       </div>
       ,
       <div className = "top" key='top2'> 
        这是 {title}
       </div>

];
      

export default SecondsTop;