import React from 'react'
import Part from './Part'
import { db } from '../../utils/db.json'

export default function Parts({db}) {

    const data = db.items.toJson()

  return (
    <div>
        <h1>Parts</h1>
        {
            data.map(e=><Part props={e}></Part>)
        }
        
    </div>
  )
}
