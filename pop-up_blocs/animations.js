$(() => {
    $('#new_word_eu_text').click(() => {
        $('#new_word').addClass('text_new_word_animated')
    })

    $('#name_dictionary_input').click(() => {
        $('#name_dictionary').addClass('text_name_dictionary_animated')
    })

    $('#new_word_eu_text').keyup(() => {
        $.get(
            '/translate',
            param = {text: $('#new_word_eu_text').val()},
            data => {
                $('#new_word_uk_text').val(data)
                //alert(data);
            }
        )

    })
})




