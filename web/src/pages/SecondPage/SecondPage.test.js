import { render } from '@redwoodjs/testing/web'

import SecondPage from './SecondPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SecondPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondPage />)
    }).not.toThrow()
  })
})
