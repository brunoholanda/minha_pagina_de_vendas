import React from 'react';
import styled from 'styled-components';
import celular from '../../../public/assets/img/celular.webp';

const SessaoDoisContainer = styled.section`
    background: linear-gradient(90.95deg, #0D1F47 0%, #142C62 30%, #0A1329 63%, #0C0F18 100%);
    width: 100%;
    height: 604px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const PhoneWrapper = styled.div`
    position: relative;
    margin-right: 120px;
`;

const ElevateText = styled.div`
    position: absolute;
    font-size: 54px;
    font-weight: 700;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, #2793F2 100%);

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 60%;

    &:nth-child(1) {
        top: 40%;
        left: -60px;
    }
    
    &:nth-child(2) {
        bottom: 20%;
        right: -100px;
    }
    
    &:nth-child(3) {
        top: 40px;
        right: -10px;
    }
`;

const Conteudo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 478px;
        height: 483px;
        position: relative;
        z-index: 2;
    }

    .textos {
        width: 498px;
        text-align: center;

        h3 {
            font-size: 34px;
            font-weight: 700;
            background-image: linear-gradient(86.89deg, #EFC6D3 0%, #049DD9 33.33%, #EFC6D3 66.67%, #2793F2 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        p {
            font-size: 21px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
`;

const SessaoDoisRodape = styled.div`
    background: linear-gradient(270deg, #049DD9 0%, #215DE4 50%, #061129 100%);
    width: 100%;
    height: 54px;
`;

export default function SessaoDois() {
    return (
        <>
            <SessaoDoisContainer>
                <Conteudo>
                    <PhoneWrapper>
                        <ElevateText>ELEVE O</ElevateText>
                        <ElevateText>ELEVE O</ElevateText>
                        <ElevateText>ELEVE O</ElevateText>
                        <img src={celular} alt="imagem de celular proposta comercial" />
                    </PhoneWrapper>
                    <div className='textos'>
                        <h3>Domine o seu negócio com um<br />método descomplicado!</h3>
                        <p>
                            Dentro do Doc Master você terá acesso às
                            mesmas ferramentas que eu uso dentro da
                            minha operação, para fechar contratos, começar <br />
                            projetos e controlar gastos, <strong>tudo 100% editável!</strong>
                        </p>
                    </div>
                </Conteudo>
            </SessaoDoisContainer>
            <SessaoDoisRodape />
        </>
    )
}