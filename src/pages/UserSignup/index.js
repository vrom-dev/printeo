import { useState } from 'react'

import './styles.css'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

export const UserSignup = () => {
  return (
    <>
      <Layout>
        <NavBar/>
        <Container>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
