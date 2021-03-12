$(document).ready(function() {
    var question_element = $(".question-rows").html();

    $("#add-question").click(function() {
        let total_element = $(".question-rows").length;

        let lastid = $(".question-rows:last").attr("id");

        let nextindex = 1;
        if (typeof(lastid) !== 'undefined' && lastid.length > 0) {
            let split_id = lastid.split("_");
            nextindex = Number(split_id[1]) + 1;        }
        let max = 20;

        if (total_element < max) {
            // Adding element to <div>
            let temp = $(".question-rows").html();
            if (typeof(temp) !== 'undefined' && temp.length > 0) {
                question_element = temp;
            }

            temp = '<div class="row question-rows" id="div_' + nextindex + '">' + question_element;
            temp = temp.replace(/Question \d+/, 'Question ' + nextindex);
            temp = temp + '</div>';

            $(".question-form").append(temp);
        }
    });
});

function removeQuestionBox(button) {

    let parentElement = button.parentElement;

    let id = $(parentElement).attr("id");
    let split_id = id.split("_");

    let deleteindex = split_id[1];

    // Remove <div> with id
    $("#div_" + deleteindex).remove();
};

function addOption(option) {
    let parent = option.parentElement.parentElement;

    if (typeof(html) !== "undefined" && html.length > 0) {
        let html = $(parent).find(".radio_input").html();

        let total_element = $(parent).length;
        let lastid = $(parent).find(".checkbox-input:last").attr("id");

        let nextindex = 1;
        if (typeof (lastid) !== 'undefined' && lastid.length > 0) {
            let split_id = lastid.split("_");
            nextindex = Number(split_id[1]) + 1;
        }

        let max = 10;
        if (total_element < max) {
            
        }
    }
}
