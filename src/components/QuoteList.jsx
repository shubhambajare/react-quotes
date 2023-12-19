import React from 'react'
import { useSelector } from 'react-redux'
import { QuoteCard } from './QuoteCard';
import { Typography } from '@mui/material';

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

            {
                !quotes.length && <Typography sx={{ mb: 1.5, mt: 2, fontSize: 15, textAlign: "center" }} color="text.secondary">
                    No result found
                </Typography>
            }
        </div>
    )
}
