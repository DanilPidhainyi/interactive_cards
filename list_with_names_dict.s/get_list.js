click_on_ico_choose_dict = (id) => {
    // получить список
    $.get(
        '/list_dict',
        data => {
            $('#list_dict').html(
                '<ul class="list_dict__ul">' +
                JSON.parse(data)
                    .list_dict
                    .map(item => `<li class="list_dict__li elem_list">
                                    <button class="elem_list__elemBut">${item}</button>
                                    <button class="elem_list__delBut">del</button>
                                  </li>`)
                    .join('')
                + '</ul>')
        }
    )
    $(id).toggle()
}

click_on_ico_choose_dict('#click_on_choose')