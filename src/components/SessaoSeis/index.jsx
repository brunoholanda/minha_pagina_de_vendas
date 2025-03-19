import React from 'react';
import styled from 'styled-components';
import rafaela from '../../../public/assets/img/perfis/rafaela.webp';
import walison from '../../../public/assets/img/perfis/walison.webp';
import matheus from '../../../public/assets/img/perfis/matheus.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

const SessaoSeisContainer = styled.section`
  width: 100%;
  display: flex;
  height: 541px;
  background: #060709;
  align-items: center;
  justify-content: center;
`;

const Conteudo = styled.div`
    background: linear-gradient(91.08deg, #0D1F47 0%, #142C62 30%, #0A1329 63%, #0C0F18 100%);
    border-top: 2px solid #333333;
    border-radius: 20px;
    height: 451px;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3, h2, p {
        color: #fff;
        text-align: center;
    }

    h3 {
        font-size: 15px;
        font-weight: 400;
        margin: 20px 0 0 0;
    }

    h2 {
        font-size: 34px;
        font-weight: 700;
        margin: 10px 0 30px 0;
    }

    .social {
        display: flex;

        .nomePerfil {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            margin-left: 10px;

            h5, h6 {
                margin: 0;
            }
            h5 {
                font-size: 18px;
                font-weight: 700;
                color: #3A74EC;
            }

            h6 {
                color: #969696;
                font-size: 13px;
                font-weight: 400;
            }
        }
    }

    .cards {
        width: 100%;
        gap: 50px;
        position: relative;

        .slick-list {
            margin: 0 100px;
        }

        .slick-dots {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            
            li{
                margin: 0 3px;

                button:before {
                    color: #fff;
                    opacity: 0.5;
                    font-size: 10px;
                }

                &.slick-active button::before {
                    color: #3A74EC;
                    opacity: 1;
                }
            }
        }
    }

`;

const Card = styled.div`
    width: calc((100% / 3) -24px);
    max-width: 307px;

    img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        object-fit: cover;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        font-family: "Sora", sans-serif;
        line-height: 20px;
        text-align: left;
    }
  
`;

export default function SessaoSeis() {

    const depoimentos = [
        { imagem: rafaela, nome: 'Rafaela Trolesi', perfil: '@trolesidigital', depoimento: 'Que material incrível Geisi. Eu adoro uma planilha, e essa Planilha Master tá surreal! Eu não sabia que precisava até comprar e ver a real necessidade de ter todo esse controle. Tudo num lugar só facilita demais. Comprei o DOC MASTER por causa da Proposta Comercial e do Contrato e você superou todas as minhas expectativas!!! Sou grata pela sua dedicação em oferecer sempre o melhor.' },
        { imagem: walison, nome: 'Walison Kayque', perfil: '@walisonkayque', depoimento: 'Geisiane, surreal esse conteúdo cara. O material disponibilizado tá sendo uma mão na roda para mim. Vai agilizar um tanto meus jobs, minha organização, anotações, controle, tudo… Muito obrigado pelo conteúdo oferecido, por todo o material! E além de tudo isso, o suporte. Você é fora de série. Parabéns! Tmj e sucesso pra todos nós. 🙅🏻‍♂️🚀🎉' },
        { imagem: matheus, nome: 'Matheus Sousa', perfil: '@designrmatheus', depoimento: 'Cara, adquiri o DocMaster hoje e dei uma olhada nas aulas, e sério, que conteúdo maravilhoso. Simplesmente impecável, tudo perfeito. O preço parece ser simbólico pro tanto de funcionalidades que tem no Doc, além da proposta e do pack que vc disponibilizou gratuitamente essa semana e com certeza vai me auxiliar muito em tudo. Parabéns mesmo, conteúdo sensacional' },
        { imagem: rafaela, nome: 'Rafaela Trolesi', perfil: '@trolesidigital', depoimento: 'Que material incrível Geisi. Eu adoro uma planilha, e essa Planilha Master tá surreal! Eu não sabia que precisava até comprar e ver a real necessidade de ter todo esse controle. Tudo num lugar só facilita demais. Comprei o DOC MASTER por causa da Proposta Comercial e do Contrato e você superou todas as minhas expectativas!!! Sou grata pela sua dedicação em oferecer sempre o melhor.' },
        { imagem: walison, nome: 'Walison Kayque', perfil: '@walisonkayque', depoimento: 'Geisiane, surreal esse conteúdo cara. O material disponibilizado tá sendo uma mão na roda para mim. Vai agilizar um tanto meus jobs, minha organização, anotações, controle, tudo… Muito obrigado pelo conteúdo oferecido, por todo o material! E além de tudo isso, o suporte. Você é fora de série. Parabéns! Tmj e sucesso pra todos nós. 🙅🏻‍♂️🚀🎉' },
        { imagem: matheus, nome: 'Matheus Sousa', perfil: '@designrmatheus', depoimento: 'Cara, adquiri o DocMaster hoje e dei uma olhada nas aulas, e sério, que conteúdo maravilhoso. Simplesmente impecável, tudo perfeito. O preço parece ser simbólico pro tanto de funcionalidades que tem no Doc, além da proposta e do pack que vc disponibilizou gratuitamente essa semana e com certeza vai me auxiliar muito em tudo. Parabéns mesmo, conteúdo sensacional' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        reposive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <SessaoSeisContainer>
                <Conteudo>
                    <h3>DEPOIMENTOS</h3>
                    <h2>Veja o que os alunos dizem</h2>
                    <div className='cards'>
                        <Slider {...settings}>
                            {depoimentos.map((item, index) => (
                                <Card key={index}>
                                    <div className='social'>
                                        <img src={item.imagem} alt={item.nome} />
                                        <div className='nomePerfil'>
                                            <h5>{item.nome}</h5>
                                            <h6>{item.perfil}</h6>
                                        </div>
                                    </div>
                                    <p>{item.depoimento}</p>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </Conteudo>
            </SessaoSeisContainer>

        </>
    )
}