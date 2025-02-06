export type ISBN = string;

export interface Book {
    isbn: ISBN;
    title: string;
}

export interface State {
    books: Book[];
}

export interface AddBookAction {
    type: 'AddBookAction';
    book: Book;
}

export interface RenameBookAction {
    type: 'RenameBookAction';
    isbn: ISBN;
    title: string;
}

export interface DeleteBookAction {
    type: 'DeleteBookAction';
    isbn: ISBN;
}

const state: State = {
    books: []
};

export type AllActions = AddBookAction | RenameBookAction | DeleteBookAction;

export function reducer(state: State, action: AllActions): State {

    if (action.type === 'AddBookAction') {
        return {
            ...state,
            books: [
                ...state.books,
                action.book
            ]
        };
    }

    if (action.type === 'RenameBookAction') {
        // Annahme: das Buch existiert
        return {
            ...state,
            books: state.books.map((book) => {
                if (book.isbn === action.isbn) {
                    const modifiedBook: Book = {
                        ...book,
                        title: action.title
                    };
                    return modifiedBook;
                }
                return book;
            })
        };
    }

    if (action.type === 'DeleteBookAction') {
        return {
            ...state,
            books: state.books.filter(book => book.isbn !== action.isbn)
        };
    }

    return state;
}