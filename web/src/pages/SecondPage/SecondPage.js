import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SecondPage = () => {
  return (
    <>
      <MetaTags title="Second" description="Second page" />

      <h1>SecondPage</h1>
      <p>
        Find me in <code>./web/src/pages/SecondPage/SecondPage.js</code>
      </p>
      <p>
        My default route is named <code>second</code>, link to me with `
        <Link to={routes.second()}>Second</Link>`
      </p>
    </>
  )
}

export default SecondPage
