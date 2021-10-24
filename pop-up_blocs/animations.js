$(() => {
    const EU_TEXT = $('#new_word_eu_text')
    EU_TEXT.click(() => {
        $('#new_word').addClass('text_new_word_animated')
    })

    $('#name_dictionary_input').click(() => {
        $('#name_dictionary').addClass('text_name_dictionary_animated')
    })

    EU_TEXT.keyup(() => {
        if (EU_TEXT.val().length > 50) {
            EU_TEXT.val("Ліміт 50 символів")
        } else {
            $.get(
                '/translate',
                param = {text: EU_TEXT.val()},
                data => {
                    $('#new_word_uk_text').val(data)
                    //alert(data);
                }
            )
        }
    })

})




