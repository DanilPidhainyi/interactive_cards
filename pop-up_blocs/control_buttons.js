cancel = (id) => {
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
    // Запрос для видалення слова
    fetch(
        '/del_word',
        {
            method: 'POST'
        }).then(_ =>
    // Запрос для обновочки
    $.get(
        '/get_word',
        data => {
            $('#front').html('<span>' + JSON.parse(data).en + '</span>')
            $('#back').html('<span>' + JSON.parse(data).uk + '</span>')
        }
    ))

}

add_dictionary = () => {
    $('#click_on_add_dictionary').toggle()

    $.get(
        '/list_dict',
        data => {
            if (JSON.parse(data).list_dict.length >= 10) {
                alert("Увага!! \n Перевищено ліміт 10 словників.")
            }
        }
    )
    const name = $('#name_dictionary_input').val()
    const dict = {}
    $(".textarea_add_dic")[0].value.split("\n")
        .filter(item => item.length > 0)
        .map(item => item.replace(/\s+/g, ' ').trim())
        .filter(item => item.length > 0)
        .map(item => item.split(/[-–]/))
        .filter(item => item.length === 2)
        .map(item => dict[item[0]] = item[1])

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
            }).then(_ => _)
    }
}

choose = () => {
    $('#click_on_choose').toggle()
}

settings = () => {
    $('#click_on_settings').toggle()
}

