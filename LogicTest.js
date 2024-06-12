const a = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']

console.log(anagram(a));


function anagram(list){
    // 1. Check Frequensi 
    // 2. Check Frequensi & Karakter Duplicate
    // 3. Kelompokan dengan list baru

    // Pengecekan frekuensi karakter dalam sebuah string
    function CharCheck(str) {
        const result = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
        return result;
    }

    // Pengecekan karakter dan frequensinya
    function elementsCheck(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }

        const result1 = CharCheck(str1);
        const result2 = CharCheck(str2);

        for (let char in result1) {
            if (result1[char] !== result2[char]) {
                return false;
            }
        }

        return true;
    }

    // Mengelompokan string dengan karakter yang sama
    var final = [];

    for (let i = 0; i < a.length; i++) {
        let flag = false;
        for (let j = 0; j < final.length; j++) {
            if (elementsCheck(a[i], final[j][0])) {
                final[j].push(a[i]);
                flag = true;
                break;
            }
        }
        if (!flag) {
            final.push([a[i]]);
        }
    }

    return final;
}
