const fs = require("fs");

class Dictionary {
    name; // ' '
    dict; // {eu: uk}
    path = './user_data'
    next_dict_entries = [];

    constructor(name, dict, path) {
        this.name = name
        if (path) {
            this.path = path
        }
        if (dict) {
            this.dict = dict
            this.write_file()
        } else {
            this.read_file()
        }

    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }

    get dict() {
        return this.dict
    }

    set dict(dict) {
        this.dict = dict
        this.write_file()
    }

    write_file() {
        fs.writeFile(
            `${this.path}/${this.name}.json`,
            JSON.stringify(this.dict),
            err => {
                if (err) {
                    console.log(`Невдалося записати словник ${this.name} \n ${err}`)
                }
            })
    }

    delete () {
        fs.promises.unlink(
            `${this.path}/${this.name}.json`,
            err => {
                if (err) {
                    console.log(`Невдалося видалити бісовий словник ${this.name} \n ${err}`);
                }
            })
    }

    read_file () {
        fs.readFile(`${this.path}/${this.name}.json`,
            (err, data) => {
                if (err) {
                    console.log(`Невдалося прочитати бісовий словник ${this.name} \n ${err}`);
                    this.dict = {Hello: 'Привіт'}
                } else {
                    this.dict = JSON.parse(data)
                }
            })
    }

    add_word (word) {
        if (Object.keys(word).length !== 0) {
            this.dict = Object.assign(this.dict, word)
            this.write_file()
        }
    }

    next () {
        /** return obj {en: uk:} */
        if (this.next_dict_entries.length === 0) {
            if (this.dict.length === 0) {
                return {
                    en: 'The dictionary is empty',
                    uk: 'Словник пустий'
                }
            } else {
                this.next_dict_entries = Object.entries(this.dict)
            }
        }
        const entries = this.next_dict_entries.pop()
        return {
            en: entries[0],
            uk: entries[1]
        }
    }

}


module.exports.list_dictionaries = (path) => {
    return fs.readdirSync(`${path}/`).map(f => f.slice(0, -5))
}


module.exports.Dictionary = Dictionary

//d = new Dictionary('Default', {Hello: 'Привіт'})
// //
// console.log(d.dict)
//
// d.delete()
//
// console.log(d);
