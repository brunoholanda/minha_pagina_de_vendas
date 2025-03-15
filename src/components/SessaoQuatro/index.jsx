import React from 'react';
import styled from 'styled-components';
import planilha from '../../../public/assets/img/planilha.webp'

const SessaoQuatroContainer = styled.section`
    background: #fff;
    width: 100%;
    height: 459px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Conteudo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    .textos {
        width: 473px;
        margin-right: 165px;

        a {
            color: #3A74EC;
            font-size: 15px;
            font-weight: 400;

            &:hover {
                cursor: pointer;
                font-weight: 700;
            }
        }

        h4 {
            font-size: 34px;
            font-weight: 700;
            color: #0E0E0E;
        }

        p {
            font-size: 21px;
            font-weight: 400;
            color: #0E0E0E;
        }
    }
    
    img {
        width: 601px;
        height: 338px;
    }
`;

export default function SessaoQuatro() {
    return (
        <>
            <SessaoQuatroContainer>
                <Conteudo>
                    <div className='textos'>
                        <a>PLANILHA MASTER</a>
                        <h4>Conheça a planilha master</h4>
                        <p>Com essa planilha você vai ter o controle financeiro do seu negócio e também relatórios para entender quais produtos você mais vende e qual margem de lucro de cada um. Quanto você recebe de cada cliente e o saldo devedor do mesmo, dentre outras análises. Veja o vídeo e veja mais.</p>
                    </div>

                    <img src={planilha} alt="banner baixe a planilha master" />
                </Conteudo>
            </SessaoQuatroContainer>
        </>
    )
}