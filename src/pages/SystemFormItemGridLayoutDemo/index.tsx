import React from 'react'

import { Input, Form, Divider } from 'antd'

import SystemFormItemGridLayout, { Label, Value } from '@/components/SystemFormItemGridLayout'

const SystemFormItemGridLayoutDemo = () => {
  return (
    <>
      <SystemFormItemGridLayout
        data={{
          width: '100%',
          columnCount: 3,
          colgroup: ['120px', '1fr'],
          children: [
            {
              key: 'title',
              label: <Label require>标题</Label>,
              value: (
                <Value>
                  <Form.Item>
                    <Input value={'标题'}></Input>
                  </Form.Item>
                </Value>
              ),
            },
            {
              key: 'name',
              label: <Label>姓名</Label>,
              value: (
                <Value>
                  <Form.Item>
                    <Input value={'姓名'}></Input>
                  </Form.Item>
                </Value>
              ),
            },
            {
              key: 'sex',
              label: <Label>性别</Label>,
              value: (
                <Value>
                  <Form.Item>
                    <Input value={'性别'}></Input>
                  </Form.Item>
                </Value>
              ),
            },
            {
              key: 'tel',
              label: <Label require>电话</Label>,
              value: (
                <Value colSpan={3}>
                  <Form.Item>
                    <Input value={'电话'}></Input>
                  </Form.Item>
                </Value>
              ),
            },
          ],
        }}
      />
      <Divider />

      <SystemFormItemGridLayout
        data={{
          width: '100%',
          columnCount: 4,
          colgroup: ['120px', '1fr'],
          children: Array.from({ length: 9 }, (_, i) => ({
            key: `demo${i}`,
            label: <Label require>{`列${i}`}</Label>,
            value: (
              <Value colSpan={i === 8 ? 7 : 1}>
                <Form.Item>
                  <Input value={`列${i}`}></Input>
                </Form.Item>
              </Value>
            ),
          })),
        }}
      />

      <Divider />

      <SystemFormItemGridLayout
        data={{
          width: '100%',
          columnCount: 1,
          colgroup: ['120px', '1fr'],
          children: Array.from({ length: 5 }, (_, i) => ({
            key: `demo${i}`,
            label: <Label require>{`列${i}`}</Label>,
            value: (
              <Value>
                <Form.Item>
                  <Input value={`列${i}`}></Input>
                </Form.Item>
              </Value>
            ),
          })),
        }}
      />
    </>
  )
}

export default SystemFormItemGridLayoutDemo
