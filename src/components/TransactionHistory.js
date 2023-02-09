import TransactionHistoryItem from './TransactionHistoryItem'

export default function TransactionHistory ({items}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                
                {items.map(item => (
                    <TransactionHistoryItem
                        key = {item.id}
                        type = {item.type} 
                        amount = {item.amount} 
                        currency = {item.currency}                    />
                ))}    
                
            </tbody>
        </table>
    )
    
}

