const upgrade_word = () => {
    $.get(
        '/get_word',
        data => {
            $('#front').html('<samp class="front__text">' + JSON.parse(data).en + '</samp>')
            $('#back').html('<span class="back__text">' + JSON.parse(data).uk + '</span>')
        }
    )
}
upgrade_word()

$(() => {
    $('#front').click(() => {
        upgrade_word()
    })
})
