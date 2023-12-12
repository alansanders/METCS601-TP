
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

async function getWork(){
    try {
        const url = "./data/work.json";
        const response = await fetch(url);
        const data = await response.json();
        var div = document.getElementById('work');
        if (response.status == 200){
            div.innerHTML = processWork(data);
            console.log(data)
        }

    } catch (err) {console.log(err)}
    
}

function processWork(work){
    const workList = work.jobs.map(work => {
        return `
        <div class="work">
            <dl>
                <dt class="company">
                ${work.company}
                </dt>
                <dt class="title">
                ${work.title}
                </dt>
                <dt class="time">
                ${work.time}
                </dt>
                <dt class="highlight">
                ${work.highlights}
                </dt>
            </dl>
        </div>
        `
    })

    return `
    ${workList.join('')}
    `;
}

window.addEventListener("load", getEducation, false);
window.addEventListener("load", getWork, false);
