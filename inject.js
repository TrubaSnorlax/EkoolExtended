console.log("Ekool Extended: Injection successful");
chrome.storage.local.get(["gradeCalculatorEnabled"], function(items){
    if(items["gradeCalculatorEnabled"]){
        const observer = new MutationObserver((mutations, obs) => {
            const gradsheet = document.getElementsByClassName("gradesheet")[0];
            if (gradsheet) {
              calcGrades();
              return;
            }
          });
        
          observer.observe(document, {
            childList: true,
            subtree: true
          });
    }
});



function calcGrades(){
    var table = document.getElementsByClassName("gradesheet")[0];
    
    var elems = [];

    for (var i = 0; i < table.children[1].children.length; i++) {
        elems.push(table.children[1].children[i].children[2]);
    };
    

    elems.forEach(element => {
        if (element.innerText == " " || element.innerText == "") {

    
            var subjectGradesUnparsed = element.parentElement.children[3].querySelectorAll(".lessonGrade, .assessmentGrade");
            var subjectGrades = [];
            for (var i = 0; i < subjectGradesUnparsed.length; i++) {
                var grade = subjectGradesUnparsed[i].children[0].innerText;
                grade = grade.replace(/[^0-9.]/g, "");
                
                if(grade != "" || grade != null) subjectGrades.push(grade);
            }
    
            var subjectGrades = subjectGrades.map(Number);
            if (subjectGrades.length > 0) {
                var avg = Math.floor(subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length * 100) / 100;
                element.innerText = avg;
                if(avg <= 3.5){
                    element.classList.add("negGrade");
                }
                else if (avg > 4.5){
                    element.style.color = "green";
                }
                else{
                    element.style.color = "orange";
                }
                document.styleSheets.push
            }
 
        }
    });
}