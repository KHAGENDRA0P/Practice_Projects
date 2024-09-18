const options = [
    {id:"opt1",text:"JavaScript",votes:0},
    {id:"opt2",text:"C/C++",votes:0},
    {id:"opt3",text:"Java",votes:0},
    {id:"opt4",text:"Python",votes:0},
];

function submitVote(){
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    console.log(selectedOption.value);

    if (!selectedOption){
        alert("Please select an option!");
        return;
    }
    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option)=> option.id === optionId);
    // console.log(selectedOptionObj);
    if (selectedOptionObj){
        selectedOptionObj.votes++;
        console.log(selectedOptionObj);
        displayResult();
    }
}

function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = "";
    options.forEach((option)=>{
        const percent = ((option.votes/getTotalVotes()) * 100).toFixed(2)|| 0 ;
        const barWidth = percent > 0 ?  percent + "%" : "0%";
        const optionResult = document.createElement("div");
        optionResult.className= "option-result";
        optionResult.innerHTML = `
            <span class ="option-text">${option.text}</span>
            <div class = "bar-container">
                <div class = "bar" style = "width: ${barWidth};"> </div>
            </div>
            <span class ="percent">${percent}</span>
        `;
        result.appendChild(optionResult);
    });
}

function getTotalVotes(){
    return options.reduce((total,option)=> total + option.votes,0);
}