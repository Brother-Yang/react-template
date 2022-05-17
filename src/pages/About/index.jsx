import React, { useEffect } from 'react'
import { get } from '@/util/request'

const About = () => {
  useEffect(() => {
    async function f() {
      const a = await get()
      console.log(a, 'a')
    }
    f()
  }, [])
  return <div>About!</div>
}

export default About
