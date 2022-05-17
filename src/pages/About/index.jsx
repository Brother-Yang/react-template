import React, { useEffect } from 'react'
import { request } from '@/util/request'

const About = () => {
  useEffect(() => {
    async function f() {
      const a = await request()
      console.log(a, 'a')
    }
    f()
  }, [])
  return <div>About!</div>
}

export default About
