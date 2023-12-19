import React from 'react'
import { useSelector } from 'react-redux'
import { QuoteCard } from './QuoteCard';

export const QuoteList = () => {

    const quotes = useSelector((state) => state.quotes);

    return (
        <div>
            {quotes.map(quote => (
                <QuoteCard
                    key={quote.id}
                    id={quote.id}
                    quote={quote.quote}
                    category={quote.category}
                />
            ))}
        </div>
    )
}
