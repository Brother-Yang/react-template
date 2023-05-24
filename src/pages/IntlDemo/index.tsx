import React from 'react'

import { TimePicker } from 'antd'

import intl from 'react-intl-universal'

const IntlDemo = () => {
  return (
    <div>
      {intl.get('SIMPLE')}
      {intl.get('HELLO', { name: '李华', where: '中国' })}

      <TimePicker />
    </div>
  )
}

export default IntlDemo
