import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

/* eslint-env jest */ /* <- Tells StandardJS to recognize Jest test library */
test('renders without crashing', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toBeDefined()
})
