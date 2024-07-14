import { createContext } from 'react';

const MyContext = createContext(
    // default value
    {
        code: ''
    }

);

export default MyContext;
