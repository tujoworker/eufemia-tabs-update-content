import React, { useState } from 'react'
import 'dnb-ui-lib/style'
import { Tabs, Input, Heading } from 'dnb-ui-lib'

export default function App() {
  const [value, setValue] = useState('test')

  return (
    <div>
      <Heading debug bottom>
        Tabs
      </Heading>
      <Input
        label="Change state"
        value={value}
        onChange={({ value }) => setValue(value)}
      />

      <pre>I am changing!: {value}</pre>

      <Tabs bottom>
        <Tabs.Content title="Tab 1">
          <Heading debug>Tab 1</Heading>
          <div>I am not changing!: {value}</div>
        </Tabs.Content>
        <Tabs.Content title="Tab 2">
          <Heading debug>Tab 2</Heading>
          <div>I am not changing!: {value}</div>
        </Tabs.Content>
      </Tabs>

      <Tabs
        data={{
          first: {
            title: 'First',
            content: <div>I am not changing!: {value}</div>
          },
          second: {
            title: 'Second',
            content: <div>I am not changing!: {value}</div>
          }
        }}
      />
    </div>
  )
}
