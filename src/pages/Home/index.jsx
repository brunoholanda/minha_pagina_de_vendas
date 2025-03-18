import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Banner from '../../components/Banner'
import SessaoDois from '../../components/SessaoDois'
import SessaoTres from '../../components/SessaoTres'
import SessaoQuatro from '../../components/SessaoQuatro'
import SessaoCinco from '../../components/SessaoCinco'

export default function Home() {
  return (
    <div>
        <Cabecalho />
        <Banner />
        <SessaoDois />
        <SessaoTres />
        <SessaoQuatro />
        <SessaoCinco />
    </div>
  )
}
