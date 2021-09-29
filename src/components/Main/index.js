import React, {useState, useEffect} from  'react'
import * as S from './style'

import {api} from '../../services/api'

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(response => setList(response.data))
    },[])


    return(
        <S.Container>
            {list.map((item,index) => (
                <S.ContainerMap>
                    <S.Text key={index}>{item.name}</S.Text>
                    <S.Image src={item.image}></S.Image>
                </S.ContainerMap>
            ))
            }
        </S.Container>
    )
}
