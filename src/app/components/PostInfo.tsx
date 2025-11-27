import Image from 'next/image'
import React from 'react'

const PostInfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative '>
      <Image src="/icons/infoMore.svg" alt='info' width={16} height={16}></Image>
    </div>
  )
}

export default PostInfo
