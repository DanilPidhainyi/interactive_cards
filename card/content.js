const upgrade_word = () => {
    $.get(
        '/get_word',
        data => {
            const EN = JSON.parse(data).en
            const UK = JSON.parse(data).uk
            add_t = str => {
                if (str.length > 40)
                    str = '<small>'+ str + '</small>'
                return  '<span class="card__text">' + str + '</span>'
            }

            $('#front').html(add_t(EN))
            $('#back').html(add_t(UK))
        }
        )
}
upgrade_word()

$(() => {
    $('#front').click(() => {
        upgrade_word()
    })
})
