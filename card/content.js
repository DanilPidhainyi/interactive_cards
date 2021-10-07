const upgrade_word = () => {
    $.get(
        '/get_word',
        data => {
            $('#front').html('<span>' + JSON.parse(data).en + '</span>')
            $('#back').html('<span>' + JSON.parse(data).uk + '</span>')
        }
    )
}
upgrade_word()

$(() => {
    $('#front').click(() => {
        upgrade_word()
    })
})
