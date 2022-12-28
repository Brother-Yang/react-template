import React from 'react'
import { useRequestHook } from '@/util/requestHook'

const About = () => {
  const demo = useRequestHook()
  return (
    <div
      onClick={() => {
        demo.run({
          url: '/posts/2',
        })
      }}
    >
      About!{`${demo.loading ? '请求开始' : '请求完事'}`} <p>{demo?.data?.id}</p>
    </div>
  )
}

export default About
