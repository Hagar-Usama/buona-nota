module.exports = {
    get: jest.fn((url) => {
        if (url === 'http://jsonplaceholder.typicode.com/todos') {
            return Promise.resolve({
                data: 'data'
            });

        }
    }),
    
    
};