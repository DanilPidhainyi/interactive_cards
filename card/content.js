$(() => {
    $('#front').click(() => {
        $.get(
            '/get_word',
            data => {
                $('#front').html('<span>' + JSON.parse(data).en + '</span>')
                $('#back').html('<span>' + JSON.parse(data).uk + '</span>')
            }
        )
    })
})
