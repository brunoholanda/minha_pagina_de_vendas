import React from 'react';
import styled from 'styled-components';
import computador from '../../../public/assets/img/computador.webp';
import pagamentos from '../../../public/assets/img/pagamentos.webp';
import presente from '../../../public/assets/icons/presente.png';
import check from '../../../public/assets/icons/check.png';

import Botao from '../Botao';
const SessaoSeteContainer = styled.section`
    background: linear-gradient(83.2deg, #0E0E0E 0%, #0E3FA7 100%);
    width: 100%;
    height: 1292px;
    display: flex;
    align-items: center;
    justify-content: center;

    .comprar {

        img {
            width: 366px;
            height: 16px;
        }

        button {
            width: 490px;
            margin-bottom: 15px;
        }
    }
`;

const CardContainer = styled.div`
    background: #fff;
    border-radius: 29px;
    padding: 20px;
    width: 500px;
    height: 1232px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
    width: 426px;
    height: 284px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    line-height: 19px;

`;

const ItemLista = styled.li`
    font-size: 16px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    color: #0e0e0e;
    line-height: 19px;
`;

const IconeCheck = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 8px;
`;

const BonusItem = styled(ItemLista)`
    font-size: 16px;
    margin-bottom: 15px;
    display: flex;
    align-items: baseline;
    color: #0e0e0e;
`;

const IconePresente = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 8px;
`;

const Preco = styled.p`
    font-size: 22px;
    color: #0e0e0e;
    text-decoration: line-through;
`;

const PrecoAtual = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: #0e0e0e;
    margin: 0 0 10px 0;
`;

const PrecoParcelado = styled.p`
    font-size: 21px;
    font-weight: 400;
    color: #0e0e0e;
    margin: 0 0 20px 0;
`;

export default function SessaoSete() {
    return (
        <SessaoSeteContainer>
            <CardContainer>
                <CardImage src={computador} alt="Oferta Especial" />

                <Lista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Proposta comercial (Photoshop, Canva e Figma)</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Modelos de contrato</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Modelos de briefing</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Planilha Master</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Modelo de orçamento</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Planejamento de conteúdo</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Modelo para portfólio</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Modelo para pesquisa de satisfação</ItemLista>
                    <ItemLista><IconeCheck src={check} alt="✔️" /> Acesso vitalício</ItemLista>
                </Lista>

                <Lista>
                    <BonusItem><IconePresente src={presente} alt="🎁" /> <strong>BÔNUS:</strong> GESTÃO FINANCEIRA, E TUDO SOBRE CRIAÇÃO DO MEI</BonusItem>
                    <BonusItem><IconePresente src={presente} alt="🎁" /> <strong>BÔNUS:</strong> ORGANIZAÇÃO E PRODUTIVIDADE</BonusItem>
                    <BonusItem><IconePresente src={presente} alt="🎁" /> <strong>BÔNUS:</strong> 3 MODELOS DE QUADRO NO TRELLO</BonusItem>
                    <BonusItem><IconePresente src={presente} alt="🎁" /> <strong>BÔNUS:</strong> ACESSO A COMUNIDADE MASTER PARA CRIAR NETWORKING</BonusItem>
                    <BonusItem><IconePresente src={presente} alt="🎁" /> <strong>BÔNUS:</strong> +10GB DE ARQUIVOS EXCLUSIVO PARA ALUNOS, NA COMUNIDADE MASTER.</BonusItem>
                </Lista>

                <Preco><strong>De</strong> R$ 297,00 <strong>por</strong></Preco>
                <PrecoAtual>6x de R$ 12,36</PrecoAtual>
                <PrecoParcelado>ou R$ 67,00 à vista</PrecoParcelado>
                <div className='comprar'>
                    <Botao>COMPRAR AGORA</Botao>
                    <img src={pagamentos} alt="Métodos de pagamento" />
                </div>
            </CardContainer>
        </SessaoSeteContainer>
    );
}