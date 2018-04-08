import React from 'react';

const List = ({list, handleItemDel, type, handleItemRecovery}) =>
<div className = 'list'>
  {
      list.map(data =>[
          type ===0 ?<li key={data.id}> {data.title} <button onClick={()=> handleItemDel(data.id)}>删除</button> </li>
          : type === 1 && data.status ===1 ?
             <li key={data.id}> {data.title} <button onClick={()=> handleItemDel(data.id)}>删除</button> </li>
             : type === 2 && data.status ===0 ?
             <li key={data.id}> {data.title} <button onClick={()=> handleItemRecovery(data.id)}>恢复</button> </li>
             :
             null
            ])
  }

</div>

export default List;