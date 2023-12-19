import { Quotes } from "../../data/Quotes";
import { RESET, SEARCH_BY_CATEGORY, SEARCH_BY_QUERY } from "../actions/QuoteActions";

const getCategories = () => {

    const allCategories = ['all'];
    Quotes.forEach(quote => {
        allCategories.push(quote.category)
    })
    return Array.from(new Set(allCategories));

}
const initialState = {
    quotes: Quotes,
    categories: getCategories(),
    selectedCategory: 'all',
    searchQuery: ''
}


export const QuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_CATEGORY: {
            let newQuotes = Quotes;
            if (action.category !== 'all') {
                newQuotes = Quotes.filter((quote) => quote.category.toLocaleLowerCase() === action.category.toLocaleLowerCase())
            }

            if (state.searchQuery?.length) {
                newQuotes = newQuotes.filter(quote =>
                    quote.category.toLocaleLowerCase().includes(state.searchQuery.toLocaleLowerCase()) || quote.quote.toLocaleLowerCase().includes(state.searchQuery.toLocaleLowerCase())
                )
            }


            return {
                ...state,
                selectedCategory: action.category,
                quotes: newQuotes
            };
        }
        case SEARCH_BY_QUERY: {
            let newQuotes = Quotes;
            if (state.selectedCategory !== 'all') {
                newQuotes = Quotes.filter((quote) => quote.category.toLocaleLowerCase() === state.selectedCategory.toLocaleLowerCase())
            }

            if (action.query?.length) {
                newQuotes = newQuotes.filter(quote =>
                    quote.category.toLocaleLowerCase().includes(action.query.toLocaleLowerCase()) || quote.quote.toLocaleLowerCase().includes(action.query.toLocaleLowerCase())
                )
            }


            return {
                ...state,
                searchQuery: action.query,
                quotes: newQuotes
            };
        }
        case RESET:
            return {
                ...state,
                quotes: []
            };
        default: return state;
    }
}