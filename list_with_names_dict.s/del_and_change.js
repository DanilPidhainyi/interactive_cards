del = dict => {
    fetch(
        '/del_dict',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dict: dict
            })
        }).then(_ => upgrade_list())

}

change = dict => {
    fetch(
        '/choose_dict',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: dict
            })
        }).then(_ => click_on_ico_choose_dict('#click_on_choose'))
}

