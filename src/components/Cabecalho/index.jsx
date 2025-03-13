import React from 'react'
import styled from 'styled-components'

const CabecalhoStyle = styled.header`
  background: #CA2659;  
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Titulo = styled.h2`
    font-size: 35px;
    color: #ffffff;
    font-weight: 700;
    margin-right: 20px;
`;

const ContadorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const CaixaTempo = styled.div`
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 16px;
    width: 108px;
    height: 88px;
    margin: 6px;
`;

const TempoNumero = styled.div`
     font-family: "Sora", sans-serif;
     font-weight: 400;
     font-size: 20px;
     color: #0E0E0E;
`;

const TempoTipo = styled.span`
    font-weight: 700;
    font-size: 17px;
    color: #0E0E0E;
`;
export default function Cabecalho() {
    return (
        <CabecalhoStyle>
            <Titulo>
                OFERTA DISPONÍVEL ATÉ:
            </Titulo>
            <ContadorGrid>
                <CaixaTempo>
                    <TempoNumero>00</TempoNumero>
                    <TempoTipo>Dias</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>00</TempoNumero>
                    <TempoTipo>Hrs</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>00</TempoNumero>
                    <TempoTipo>Min</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>00</TempoNumero>
                    <TempoTipo>Seg</TempoTipo>
                </CaixaTempo>
            </ContadorGrid>
        </CabecalhoStyle>
    )
}
