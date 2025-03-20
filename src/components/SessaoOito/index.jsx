import React, { useState } from 'react';
import styled from 'styled-components';
import garantia from '../../../public/assets/img/garantia.webp';
import mentora from '../../../public/assets/img/mentora.webp';
import bgImage from '../../../public/assets/img/bg-section.webp';

const SessaoUm = styled.section`
  width: 100%;
  display: flex;
  height: 348px;
  background: #060709;
  align-items: center;
  justify-content: center;

  img {
    width: 205px;
    height: 248px;
    margin-right: 160px;
  }

  .textos {
    width: 374px;
    text-align: left;

    h2 {
        color: #4D97FF;
        font-size: 34px;
        font-weight: 700;

    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    }
  }
`;

const SessaoDois = styled.section`
  display: flex;
  background: url(${bgImage});
  align-items: center;
  justify-content: center;
  padding: 50px;

  .textos {
    width: 598px;
    text-align: left;
    margin-right: 160px;

    h3 {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
    }

    h2 {
        color: #4D97FF;
        font-size: 34px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    }
  }

  img {
    width: 383px;
    height: 453px;
  }
`;


const SessaoTres = styled.section`
  display: flex;
  background: #060709;
  align-items: center;
  justify-content: center;
  padding: 50px;

  .textos {
    color: #fff;
    text-align: left;
    margin-right: 160px;

    h3{
        font-size: 15px;
        font-weight: 400;
    }

    h2 {
        font-size: 34px;
        font-weight: 700;
    }
  }


`;

const faqItems = [
    {
        pergunta: "Quando vou ter meu acesso liberado?",
        resposta: "O acesso é liberado imediatamente após a confirmação do pagamento."
    },
    {
        pergunta: "Como vou ter certeza de que a compra foi aprovada?",
        resposta: "Você receberá um e-mail de confirmação assim que o pagamento for aprovado."
    },
    {
        pergunta: "Quais as formas de pagamentos?",
        resposta: "Aceitamos todos os cartões de crédito, PIX e boleto bancário."
    },
    {
        pergunta: "Como recebo os dados?",
        resposta: "Os dados de acesso serão enviados para o e-mail cadastrado no ato da compra."
    }
]

const FAQItemContainer = styled.div`
    border-bottom: 1px solid #D5D8DC;
`;
const Pergunta = styled.div`
    display: flex;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    margin-top: 5px;

    span {
        transition: transform 0.3s ease;
        transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
        margin-right: 10px;
    }
`;

const Resposta = styled.div`
    padding-top: 15px;
    color: #fff;
    max-height: ${props => props.isOpen ? '500px' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
    margin-bottom: 5px;
`;

function FAQItem({ pergunta, resposta }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQItemContainer>
            <Pergunta onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} >
                <span>{isOpen ? '▲' : '➤'}</span>
                {pergunta}
            </Pergunta>
            <Resposta isOpen={isOpen}>
                {resposta}
            </Resposta>

        </FAQItemContainer>
    )
}

export default function SessaoOito() {
    return (
        <>
            <SessaoUm>
                <img src={garantia} alt="selo de garantia" />
                <div className='textos'>
                    <h2>Totalmente seguro!</h2>
                    <p>E caso você sinta que o Doc Master não cumpriu com sua missão, mande uma mensagem para minha equipe dentro dos primeiros 7 dias que minha equipe devolve seu dinheiro sem ressentimentos!</p>
                </div>
            </SessaoUm>
            <SessaoDois>
                <div className='textos'>
                    <h3>A SUA PROFESSORA</h3>
                    <h2>Geisiane Marques</h2>
                    <p>Aqui é a Geisiane, atuo na área de design há mais de 3 anos e tenho clientes hoje em mais de 5 países diferentes pelo globo.</p>
                    <p>No começo, assim como você, eu não queria saber muito de organização e controle, por conta de sempre estar negociando sem contrato e pegando projetos pequenos.</p>
                    <p>Bom, esse ano tudo mudou, eu comecei a profissionalizar minha empresa e foi necessário que eu mudasse coisas que hoje me dão dor de cabeça porque eu negligenciei tempos atrás.</p>
                    <p>Por isso o Doc Master existe e por isso ele é tão acessível.</p>
                    <p>Não tem segredo, ele está bem direto ao ponto e a única coisa que eu quero te convencer aqui é: Comece do jeito fácil para crescer.</p>
                    <p>Invista o valor menor de 1 pizza no treinamento e eu te garanto que sua empresa ficará muito mais profissional!</p>
                </div>
                <img src={mentora} alt="foto da mentora do curso" />
            </SessaoDois>
            <SessaoTres>
                <div className='textos'>
                    <h3>F A Q</h3>
                    <h2>Perguntas frequentes</h2>
                </div>
                <div>
                    {faqItems.map((item, index) => (

                        <FAQItem
                            key={index}
                            pergunta={item.pergunta}
                            resposta={item.resposta}
                        />
                    ))}
                </div>
            </SessaoTres>
        </>
    )
}