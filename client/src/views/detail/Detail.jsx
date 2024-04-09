import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  return (
    <div>Detail</div>
  )
}

export default Detail