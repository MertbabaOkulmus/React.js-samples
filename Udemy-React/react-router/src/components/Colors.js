import React from 'react'
//{match:{rgb}}
export const Colors=(prp)=>{
    console.log(prp.match.params.rgb);
   return <div style={{backgroundColor:`#${prp.match.params.rgb}`}}>Colors</div>
}