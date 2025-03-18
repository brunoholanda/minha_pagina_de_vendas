import React from 'react';
import styled from 'styled-components';
import bannerBg from '../../../public/assets/img/bg-section.webp';
import um from '../../../public/assets/img/cards/01.webp';
import dois from '../../../public/assets/img/cards/02.webp';
import tres from '../../../public/assets/img/cards/03.webp';
import quatro from '../../../public/assets/img/cards/04.webp';
import cinco from '../../../public/assets/img/cards/05.webp';
import seis from '../../../public/assets/img/cards/06.webp';
import sete from '../../../public/assets/img/cards/07.webp';
import oito from '../../../public/assets/img/cards/08.webp';
import nove from '../../../public/assets/img/cards/09.webp';
import dez from '../../../public/assets/img/cards/10.webp';
import setinha from '../../../public/assets/icons/setinha.png';
import kiwify from '../../../public/assets/icons/kiwify.webp';

import Botao from '../Botao';

const SessaoCincoContainer = styled.section`
  background: url(${bannerBg});
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Conteudo = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 21px;
        font-weight: 400;
        max-width: 615px;
        color: #fff;
        margin-bottom: 100px;
        text-align: center;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 30px;
    }

`;

const Card = styled.div`
    width: calc((100% / 5) -24px);
    max-width: 230px;

    img {
        width: 100%;
        height: 411px;
        object-fit: cover;
        margin-bottom: 0;
    }

    button {
        background-color: #4D97FF;
        border: none;
        border-bottom: 1px solid #FFFFFF;
        width: 100%;
        height: 48px;
        color: #fff;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-top: 0;
        cursor: pointer;

        img {
            width: 8px;
            height: 12px;
            margin-right: 10px;

        }
    }
`;

const SessaoCincoComprar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #060709;
        height: 193px;

        button {
            margin-top: 35px;
        }

        img {
            margin-top: 8px;
            width: 181px;
            height: auto;
        }
`;

export default function SessaoCinco() {

    const imagens = [
        { imagem: um, titulo: 'imagem proposta comercial' },
        { imagem: dois, titulo: 'imagem modelos' },
        { imagem: tres, titulo: 'imagem brifing' },
        { imagem: quatro, titulo: 'imagem fluxo de caixa' },
        { imagem: cinco, titulo: 'imagem planilha master' },
        { imagem: seis, titulo: 'imagem produtividade' },
        { imagem: sete, titulo: 'imagem modelos de orcamento' },
        { imagem: oito, titulo: 'imagem planejamento de conteudo' },
        { imagem: nove, titulo: 'imagem potifolio' },
        { imagem: dez, titulo: 'imagem de satisfacao' },
    ];

    return (
        <>
            <SessaoCincoContainer>
                <Conteudo>
                    <h2>E já que estamos falando do que você encontrar dentro Doc, veja por dentro do treinamento:</h2>
                    <div className='cards'>
                        {imagens.map((item, index) => (
                            <Card key={index}>
                                <img src={item.imagem} alt={item.titulo} />
                                <button>
                                    <img src={setinha} alt="icone de setinha" />
                                    SAIBA MAIS
                                </button>
                            </Card>
                        ))}

                    </div>
                </Conteudo>
            </SessaoCincoContainer>
            <SessaoCincoComprar>
                <Botao>
                    COMPRAR AGORA
                </Botao>
                <img src={kiwify} alt="logo da kiwify" />
            </SessaoCincoComprar>
        </>
    )
}