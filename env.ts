const environments = {
    test: {
        typicodeUrl: 'https://jsonplaceholder.typicode.com'
    },
    prod: {
        typicodeUrl: 'https://jsonplaceholder.typicode.com'
    }
}

const environment = environments[process.env.NODE_ENV || 'test'];

export default environment;