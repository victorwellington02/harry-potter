import React, {useState, useEffect} from  'react'
import {Text} from './style'

import {api} from '../../services/api'

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(response => setList(response.data))
    },[])


    return(
        <div>
            <p>simplesmente</p>
            {list.map((item,index) => <Text key={index}>{item.name}</Text>)}
        </div>
    )
}
