import store from '../index'

export const fetchData = () => {
    return {
        type: 'fetchUser'
    };
}

export const receiveData = (post) => {
    return {
        type: 'fetchedUser',
        data: post
    };
}

export const isErrorData = () => {
    return {
        type: 'error'
    }
}

const thunkFunction = (username) => {
    const user = username;
    store.dispatch(fetchData());
    return function (dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found");
                } else dispatch(receiveData(data));
            })
            .catch(err => dispatch(isErrorData()));
    };
};

export default thunkFunction