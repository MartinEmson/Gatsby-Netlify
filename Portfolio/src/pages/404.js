import * as React from "react"
import "../css/style.css"
import Layout from "../components/layout"

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = () => (
  <Layout>
    <div className="wrapper">
      <h1>404: Not Found</h1>´
    </div>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
