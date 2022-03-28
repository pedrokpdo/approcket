import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions').then(response => response.json()).then(data => console.log(data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Web Site</td>
                        <td className="deposit">12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">-1100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}