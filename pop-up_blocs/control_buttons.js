cancel = (id) => {
    $(id).toggle()
}

click_on_ico = (id) => {
    $(id).toggle()
}

click_on_ico_choose_dict = (id) => {
    // получить список
    $.get(
        '/list_dict',
        data => {
            $('#list_dict').html(
                '<ul>' +
                JSON.parse(data)
                    .list_dict
                    .map(item => `<li>${item}</li>`)
                    .join('')
                + '</ul>')
        }
    )
    $(id).toggle()
}

add_word = () => {
    const uk = $('#new_word_uk_text').val()
    const eu = $('#new_word_eu_text').val()
    if (eu !== '') {
        fetch('/add_word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                [eu]: uk
            })
        }).then(_ => _)
    }
    $('#click_on_plus').toggle()
}

del_word = () => {
    $('#click_on_minus').toggle()
    // $.post(
    //     '/add_word',
    //     param={text: "eeess"},
    //     data => {
    //         alert(data)
    // })
}

add_dictionary = () => {
    $('#click_on_add_dictionary').toggle()
    const name = $('#name_dictionary_input').val()
    const dict = {}
    if (name !== '') {
        fetch(
            '/add_dict',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    dict: dict
                })
            }).then(_ => alert(_))
    }
}

choose = () => {

    $('#click_on_choose').toggle()
}

settings = () => {
    $('#click_on_settings').toggle()
}
