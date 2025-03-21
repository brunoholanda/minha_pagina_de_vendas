import React, { useEffect, useState } from 'react'
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
    const calcularTempoRestante = () => {
        const agora = new Date();
        const fimDoDia = new Date();
        fimDoDia.setHours(23, 0, 0, 0);

        const diferenca = fimDoDia - agora;

        if (diferenca <= 0) {
            return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        return {dias, horas, minutos, segundos}
    }

    const [tempoRestante, setTempoRestante] = useState(calcularTempoRestante());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempoRestante(calcularTempoRestante());
        }, 1000);
        
        return () => clearInterval(intervalo);
    }, [])

    return (
        <CabecalhoStyle>
            <Titulo>
                OFERTA DISPONÍVEL ATÉ:
            </Titulo>
            <ContadorGrid>
                <CaixaTempo>
                    <TempoNumero>{String(tempoRestante.dias).padStart(2, 0)}</TempoNumero>
                    <TempoTipo>Dias</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>{String(tempoRestante.horas).padStart(2, 0)}</TempoNumero>
                    <TempoTipo>Hrs</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>{String(tempoRestante.minutos).padStart(2, 0)}</TempoNumero>
                    <TempoTipo>Min</TempoTipo>
                </CaixaTempo>
                <CaixaTempo>
                    <TempoNumero>{String(tempoRestante.segundos).padStart(2, 0)}</TempoNumero>
                    <TempoTipo>Seg</TempoTipo>
                </CaixaTempo>
            </ContadorGrid>
        </CabecalhoStyle>
    )
}
