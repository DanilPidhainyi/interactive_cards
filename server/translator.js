const translate = require('@vitalets/google-translate-api');

// для перекладу
module.exports.to_uk = async (text) => {
    try {
        const res = await translate(text, {from: 'en', to: 'uk' })
        return res.text
        //$('#input_uk_text').val(res.text)
    }
    catch (error){
        return 'провал'
    }
}
