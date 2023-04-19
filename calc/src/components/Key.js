import React from 'react'

export const Key = () => {
    const all_btns=[]
    for(let i=1;i<10;i++)
    {
       all_btns.push(<button>{i}</button>)
    }
  return (
    <div>
    {all_btns}
    </div>
  )
}

