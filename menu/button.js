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

click_on_ico_del_word = (id) => {
    // узнаєм яке слово удалять
    $.get(
        '/get_active_word',
        data => {
            $('#form_input__h3').html('Видалити слово ' + JSON.parse(data).en + '?')
        }
    )
    $(id).toggle()
}