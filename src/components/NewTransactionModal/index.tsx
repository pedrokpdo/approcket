import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)
    const [title, setTitle] = useState('')
    const [amout, setAmout] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
       await createTransaction({
            title,
            amout,
            category,
            type
        })
        setTitle('');
        setAmout(0);
        setCategory('');
        setType('deposit');
        onRequestClose();

    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>este é o modal</h2>
                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    value={amout}
                    onChange={event => setAmout(Number(event.target.value))}
                    placeholder='Valor'
                />
                <TransactionTypeContainer>
                    <RadioBox
                        isActive={type === 'deposit'}
                        type='button'
                        onClick={() => setType('deposit')}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        type='button'
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}