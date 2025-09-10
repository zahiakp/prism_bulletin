import Image from 'next/image'
import React from 'react'

function Empty() {
  return (
    <section className="h-72 flex items-center justify-center bg-gray-100  rounded-xl flex-col">
                        <Image height={50} width={100} src="/notitem.png" alt="notitem.png" className="h-40 w-auto mb-2"/> No Items Found
                    </section>
  )
}

export default Empty
