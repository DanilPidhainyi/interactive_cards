click_on_ico = (id) => {
    $(id).toggle()
}

click_on_ico_del_word = (id) => {
    // узнаєм яке слово удалять
    $.get(
        '/get_active_word',
        data => {
            $('#form_input__h3').html('Видалити: ' + JSON.parse(data).en + '?')
        }
    )
    $(id).toggle()
}