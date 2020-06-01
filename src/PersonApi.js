const fetchPerson = () => {
    return fetch("https://randomuser.me/api")
        .then(x => x.json())
        .then(x => x.results[0]);
};

export const randomNumber = async () => {
    return new Promise((resolve => {
      setTimeout(() => resolve(Math.random()), 3000)  
    }))
}

const wrapPromise = (promise) => {
    let status = 'pending';
    let result = '';
    let suspender = promise.then(r => {
        status = 'success'
        result = r;
    }, e => {
        status = 'error'
        result = e
    })

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            }
            return result;
        }
    }
}

export const createResourse = () => {
    return {
        person: wrapPromise(fetchPerson()),
        num: wrapPromise(randomNumber())
    }
}