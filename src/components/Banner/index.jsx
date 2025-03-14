import React from 'react'
import styled from 'styled-components'
import logo from '../../../public/assets/icons/logo.webp';
import kiwify from '../../../public/assets/icons/kiwify.webp';
import presente from '../../../public/assets/icons/presente.webp';
import pasta from '../../../public/assets/icons/pasta.webp';
import tempo from '../../../public/assets/icons/tempo.webp';
import editavel from '../../../public/assets/icons/editavel.webp';

import Botao from '../Botao';

const BannerContainer = styled.section`
  background-image: url('../../../public/assets/img/banner-bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1920 / 663;
  display: flex;
  align-items: center;
`;

const Conteudo = styled.div`
    width: 500px;
    margin: 0 auto;
    position: relative;
    right: 300px;

    .logo {
        width: 155px;
        height: 49px;
        margin-bottom: 40px;
    }

    h1 {
        font-size: 38px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 21px;
        font-weight: 400;
        margin: 0;
    }

    .paragrafo_um {
        color: #fff;
    }

    .paragrafo_dois {
        color: #049DD9;
    }

    .comprar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        img {
            margin-top: 8px;
            width: 181px;
            height: auto;
        }
    }

`;

const BannerRodape = styled.div`
    background-color: #0f1218;
    width: 100%;
    height: 77px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid #333333;

    .vantagens {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 50px;

        img {
            width: 36px;
            height: 36px;
        }

        p{
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            margin-left: 8px;
        }
    }
`;

export default function Banner() {
    return (
        <>
            <BannerContainer>
                <Conteudo>
                    <img className='logo' src={logo} alt="logo da pagina de vendas" />
                    <h1>As ferramentas que farão
                        você ser um designer
                        organizado, profissional e
                        com mais autoridade
                    </h1>
                    <p className='paragrafo_um' >Documentos 100% editáveis e fáceis de editar,</p>
                    <p className='paragrafo_dois'>mesmo que você seja iniciante.</p>
                    <div className='comprar'>
                        <Botao>
                            COMPRAR AGORA
                        </Botao>
                        <img src={kiwify} alt="logo da kiwify" />
                    </div>
                </Conteudo>
            </BannerContainer>
            <BannerRodape>
                <div className='vantagens'>
                    <img src={presente} alt="icone de presente" />
                    <p>BÔNUS ESPECIAL</p>
                </div>
                <div className='vantagens'>
                    <img src={pasta} alt="Icone de pasta" />
                    <p>ACESSO IMEDIATO</p>
                </div>
                <div className='vantagens'>
                    <img src={tempo} alt="icone de tempo" />
                    <p>PRODUTO VITALÍCIO</p>
                </div>
                <div className='vantagens'>
                    <img src={editavel} alt="icone editavel" />
                    <p>100% EDITÁVEL</p>
                </div>
            </BannerRodape>
        </>
    )
}
