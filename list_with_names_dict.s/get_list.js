
upgrade_list = () => {
    // получить список
    $.get(
        '/list_dict',
        data => {
            $('#list_dict').html(
                '<ul class="list_dict__ul">' +
                JSON.parse(data)
                    .list_dict
                    .map(item => `<li class="list_dict__li elem_list">
                                    <button class="elem_list__elemBut" onclick="change('${item}')">${item}</button>
                                    <button class="elem_list__delBut" onclick="del('${item}')">del</button>
                                  </li>`)
                    .join('')
                + '</ul>')
        }
    )
}


click_on_ico_choose_dict = (id) => {
    upgrade_list()
    $(id).toggle()
}

click_on_ico_choose_dict('#click_on_choose')