const fs = require('fs');
const input = require('./raw.json');
const filtered = input.map(({first_name, last_name, ...rest}) => ({first_name, last_name}))

function transformVN(str){
    str = str.replace(/à/g, "af");
    str = str.replace(/á/g, "as");
    str = str.replace(/ạ/g, "aj");
    str = str.replace(/ả/g, "ar");
    str = str.replace(/ã/g, "ax");
    str = str.replace(/â/g, "aa");
    str = str.replace(/ầ/g, "aaf");
    str = str.replace(/ấ/g, "aas");
    str = str.replace(/ậ/g, "aaj");
    str = str.replace(/ẩ/g, "aar");
    str = str.replace(/ẫ/g, "aax");
    str = str.replace(/ă/g, "aw");
    str = str.replace(/ằ/g, "awf");
    str = str.replace(/ắ/g, "aws");
    str = str.replace(/ặ/g, "awj");
    str = str.replace(/ẳ/g, "awr");
    str = str.replace(/ẵ/g, "awx");

    str = str.replace(/è/g, "ef");
    str = str.replace(/é/g, "es");
    str = str.replace(/ẹ/g, "ej");
    str = str.replace(/ẻ/g, "er");
    str = str.replace(/ẽ/g, "ex");
    str = str.replace(/ê/g, "ee");
    str = str.replace(/ề/g, "eef");
    str = str.replace(/ế/g, "ees");
    str = str.replace(/ệ/g, "eej");
    str = str.replace(/ể/g, "eer");
    str = str.replace(/ễ/g, "eex");


    str = str.replace(/ì/g, "if");
    str = str.replace(/í/g, "is");
    str = str.replace(/ị/g, "ij");
    str = str.replace(/ỉ/g, "ir");
    str = str.replace(/ĩ/g, "ix");

    str = str.replace(/ò/g, "of");
    str = str.replace(/ó/g, "os");
    str = str.replace(/ọ/g, "oj");
    str = str.replace(/ỏ/g, "or");
    str = str.replace(/õ/g, "ox");
    str = str.replace(/ô/g, "oo");
    str = str.replace(/ồ/g, "oof");
    str = str.replace(/ố/g, "oos");
    str = str.replace(/ộ/g, "ooj");
    str = str.replace(/ổ/g, "oor");
    str = str.replace(/ỗ/g, "oox");
    str = str.replace(/ơ/g, "ow");
    str = str.replace(/ờ/g, "owf");
    str = str.replace(/ớ/g, "ows");
    str = str.replace(/ợ/g, "owj");
    str = str.replace(/ở/g, "owr");
    str = str.replace(/ỡ/g, "owx");


    str = str.replace(/ù/g, "uf");
    str = str.replace(/ú/g, "us");
    str = str.replace(/ụ/g, "uj");
    str = str.replace(/ủ/g, "ur");
    str = str.replace(/ũ/g, "uw");
    str = str.replace(/ư/g, "uw");
    str = str.replace(/ừ/g, "uwf");
    str = str.replace(/ứ/g, "uws");
    str = str.replace(/ự/g, "uwj");
    str = str.replace(/ử/g, "uwr");
    str = str.replace(/ữ/g, "uwx");

    str = str.replace(/ỳ/g, "yf");
    str = str.replace(/ý/g, "ys");
    str = str.replace(/ỵ/g, "yj");
    str = str.replace(/ỷ/g, "yr");
    str = str.replace(/ỹ/g, "yx");

    str = str.replace(/đ/g, "dd");
    return str;
}

const transformed = filtered.map(({first_name, last_name}) => {
    first_name = transformVN(first_name.toLowerCase());
    last_name = transformVN(last_name.toLowerCase());
    first_name = first_name.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    last_name =  last_name.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())

    return {first_name, last_name}
})

fs.writeFileSync('output-vntelexing.json', JSON.stringify(transformed));