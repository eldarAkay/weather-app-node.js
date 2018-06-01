var getUser = (id, callBack) => {

    var user = {
        id: id,
        name: "Some Mr John"
    }
    setTimeout(() => { callBack(user);},1000);
}

getUser(31, (userObject) => {
    console.log(userObject);
});

