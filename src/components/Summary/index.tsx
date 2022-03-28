import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { useContext } from "react";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amout;
            acc.total += transaction.amout
        } else {
            acc.withdraws += transaction.amout
            acc.total -= transaction.amout;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,

    }

    )

    return (

        <Container>
            <div>
                <header>
                    <p>Entadas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}

                </strong>
            </div>
            <div className="fundo-hl">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}

                </strong>
            </div>
        </Container>

    )

}