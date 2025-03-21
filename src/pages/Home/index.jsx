import React, { Suspense, lazy } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Banner from '../../components/Banner'
import LoadingSpinner from '../../components/Loading'

const SessaoDois = lazy(() => import('../../components/SessaoDois'))
const SessaoTres = lazy(() => import('../../components/SessaoTres'))
const SessaoQuatro = lazy(() => import('../../components/SessaoQuatro'))
const SessaoCinco = lazy(() => import('../../components/SessaoCinco'))
const SessaoSeis = lazy(() => import('../../components/SessaoSeis'))
const SessaoSete = lazy(() => import('../../components/SessaoSete'))
const SessaoOito = lazy(() => import('../../components/SessaoOito'))

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <Banner />
      <Suspense fallback={<LoadingSpinner />}>
        <SessaoDois />
        <SessaoTres />
        <SessaoQuatro />
        <SessaoCinco />
        <SessaoSeis />
        <SessaoSete />
        <SessaoOito />
      </Suspense>
    </div>
  )
}
