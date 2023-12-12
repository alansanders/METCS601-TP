var el = document.getElementById('addEducation');

async function getEducation(){
    try {
        const url = "./data/education.json";
        const response = await fetch(url);
        const data = await response.json();
        var div = document.getElementById('education');
        if (response.status == 200){
            div.innerHTML = processEducation(data);
            console.log(data)
        }

    } catch (err) {console.log(err)}
    
}

function processEducation(education){
    const educationlist = education.degrees.map(education => {
        return `
        <div class="degree-item">
            <dl>
                <dt>
                ${education.school}
                </dt>
                <dt>
                ${education.type}, ${education.program}
                </dt>
                <dt>
                ${education.yearConferred}
                </dt>
                <dd>
                </dd>
            </dl>
        </div>
        `
    })

    return `
    ${educationlist.join('')}
    `;
}

el.addEventListener('click', getEducation, false);