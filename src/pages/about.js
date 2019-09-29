import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
        <ul>
            <li>
                <Link to="/" activeStyle={{ color: "red" }}>Link Home</Link>
            </li>
            <li>
                <Link to="/about" activeStyle={{ color: "red" }}>Link About</Link>
            </li>
        </ul>
    </Layout>
)

export default AboutPage