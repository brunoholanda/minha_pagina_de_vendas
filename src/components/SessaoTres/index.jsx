import React from 'react'
import styled from 'styled-components';
import valor from '../../../public/assets/icons/valor.webp'
import dinheiro from '../../../public/assets/icons/dinheiro.webp'
import financeiro from '../../../public/assets/icons/financeiro.webp'
import organizacao from '../../../public/assets/icons/organizacao.webp'

const SessaoTresContainer = styled.section`
    background: #0D0F18;
    width: 100%;
    height: 660px;
    display: flex;
    justify-content: center;
`;

const Conteudo = styled.div`
    text-align: center;
    margin-top: 40px;

    h3 {
        color: #fff;
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 100px;
    }

    .beneficios {

        display: flex;
        justify-content: center;
        flex-direction: row;

        .card {
            width: 237px;
            height: 425px;
            border-right: 1px solid #333333;
            margin-right: 50px;
            padding-right: 30px;
            
            img {
                width: 79px;
                height: 79px;
            }

            h4 {
                font-size: 28px;
                font-weight: 700;
                color: #fff;
            }

            p {
                font-size: 17px;
                font-weight: 400;
                color: #fff;
            }
        }
    }
`;

export default function SessaoTres() {
    return (
       <SessaoTresContainer>
        <Conteudo>
            <h3>Benefícios ao adquirir o DOC MASTER:</h3>
            <div className='beneficios'>
                <div className='card'>
                    <img src={valor} alt="icone de valor" />
                    <h4>Percepção de Valor</h4>
                    <p>Com a proposta comercial você terá uma forma mais profissional de apresentar o seu trabalho.</p>
                </div>
                <div className='card'>
                    <img src={dinheiro} alt="icone de valor" />
                    <h4>Adeus Calote!</h4>
                    <p>Com os contratos você não irá sofrer tomando calote nunca mais. Os contratos asseguram ambas as partes, tanto o cliente como o prestador de serviço.</p>
                </div>
                <div className='card'>
                    <img src={financeiro} alt="icone de valor" />
                    <h4>Controle Financeiro</h4>
                    <p>Com a nossa planilha master você será capaz de ter o controle financeiro do seu negócio. Esse é o primeiro passo para um negócio de sucesso.</p>
                </div>
                <div className='card'>
                    <img src={organizacao} alt="icone de valor" />
                    <h4>Mais Organização</h4>
                    <p>Chega de começar a trabalhar e não saber o que tem que entregar naquele dia. Com os documentos do DOC MASTER você vai conseguir se organizar melhor.</p>
                </div>
            </div>
        </Conteudo>
       </SessaoTresContainer>
    )
}
