import React from 'react'
import { BodyApi } from '../Api/BodyApi'

function Body() {

  return (
    <>
    {BodyApi.map((data,index) => <div class="at"key={index}>
            <div class="am" >
                <img src={data.image} alt=""/>
               <div class="as">
                    <h2 class="are">{
                        data.title
                    }
                    </h2>
                    <div class="ace">{data.paragraph}</div>
               </div>
            </div>

        </div>) }
        
       
    </>
  )
}

export default Body