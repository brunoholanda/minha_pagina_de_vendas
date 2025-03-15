import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Banner from '../../components/Banner'
import SessaoDois from '../../components/SessaoDois'
import SessaoTres from '../../components/SessaoTres'
import SessaoQuatro from '../../components/SessaoQuatro'

export default function Home() {
  return (
    <div>
        <Cabecalho />
        <Banner />
        <SessaoDois />
        <SessaoTres />
        <SessaoQuatro />
    </div>
  )
}
