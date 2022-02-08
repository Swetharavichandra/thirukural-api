async function thiru() {
    try {
        let input = document.getElementById("userinput").value
        let api = await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`)
        let result = await api.json()
        console.log(result);

        let chaptertamil = `பகுதி : ${result.chap_tam}`
        let chaptereng = `Chapter: ${result.chap_eng}`
        document.getElementById("chapter_tam").innerHTML = chaptertamil;
        document.getElementById("chapter_eng").innerHTML = chaptereng;

        let ph_eng = ` ${result.eng}`
        let part1 = `${result.line1}`
        let part2 = `${result.line2}`
        document.getElementById("ph_eng").innerHTML = `Philosophy : ${ph_eng}`
        document.getElementById("part1tam").innerHTML = `குறள் : ${part1}`
        document.getElementById("part2tam").innerHTML = `${part2}`

        let tam_exp = `${result.tam_exp}`
        let exp_eng = `Explanation : ${result.eng_exp}`
        document.getElementById("tam_exp").innerHTML = `விளக்கம் : ${tam_exp}`
        document.getElementById("exp_eng").innerHTML = `${exp_eng}`
    }
    catch (error) {
        console.log(error);
    }
}