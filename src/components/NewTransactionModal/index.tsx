import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                onClick={onRequestClose}
                type='button'
                className='react-modal-close'
            >
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container>
                <h2>este é o modal</h2>
                <input
                    placeholder='Titulo'
                />
                <input
                    placeholder='Valor'
                />
                <TransactionTypeContainer>
                    <RadioBox
                        isActive={type === 'deposit'}
                        type='button'
                        onClick={() => setType('deposit') }
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        type='button'
                        onClick={() => setType('withdraw') }
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder='Categoria'
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}