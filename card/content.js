const upgrade_word = () => {
    $.get(
        '/get_word',
        data => {
            add_s = str => {
                if (str.length > 100)
                    return '<small>'+ str + '</small>'
                else
                    return  str
            }

            $('#front').html(add_s(JSON.parse(data).en))
            $('#back').html(add_s(JSON.parse(data).uk))
        }
    )
}
upgrade_word()

$(() => {
    $('#front').click(() => {
        upgrade_word()
    })
})
