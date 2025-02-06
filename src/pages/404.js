import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404</h1>
    <p>Ops, Não tem nada aqui!</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
