function app() {
  return $("#maturity-app");
}

function extractRangeFromText(i, el) {
  var re = /\(.*?(\d+)\D+(\d+).*\)/
  var range = $(el).text().match(re);
  return [+range[1], +range[2]];
}

function results() {
  var headings = app().find(".results > h4");
  return headings.map(function(index, el) {
    el = $(el);
    var pointRange = el.map(extractRangeFromText);
    return {
      heading: el,
      description: el.next("p"),
      minPoints: pointRange[0],
      maxPoints: pointRange[1]
    };
  });
}

function assessments() {
  var headings = app().find(".assessments > h3");
  return headings.map(function(index, el) {
    el = $(el);
    return {
      heading: el,
      description: el.next("ul"),
      answers: el.next("ul").next("ol").children("li")
    };
  });
}

function add(a, b) {
  return +a + +b;
}

function totalPoints() {
  return $(":radio:checked")
  .map(function(i,btn) { return +$(btn).val() })
  .toArray()
  .reduce(add, 0);
}

function updateResult() {
  // initialize display of total score
  var totalElements = {
    heading: app().find(".results > h3"),
    instructions: app().find(".results > h3").next("p")
  };
  totalElements.instructions.hide();
  totalElements.heading.html(["Total:", totalPoints(), "points"].join(" "));

  // hide the maturity results
  results().each(function(i, result) {
    result.heading.hide();
    result.description.hide();
  });
  // display the correct result
  results().each(function(i, result) {
    var p = totalPoints();
    if (p >= result.minPoints & p <= result.maxPoints) {
      result.heading.show();
      result.description.show();
      totalElements.instructions.html("<hr/>");
      totalElements.instructions.show();
    }
  });
}

$(function() {

  if (window.location.search != 0) return; //abort whenever query params are present

  app().wrap("<form></form>");

  // transform numbered lists into radio buttons
  assessments().each(function(assessmentIndex, assessment) {
    assessment.answers.wrapAll("<fieldset class='usa-fieldset-inputs'>");
    assessment.answers.each(function(answerIndex, listItem) {
      var pointValue = answerIndex + 1;
      var selected = (answerIndex == 0 ? " checked " : "");
      var labelText = [pointValue, $(listItem).text()].join(" - ");
      var radioButton = $( [
        "<input type=radio name=", "assessment-"+assessmentIndex, " value="+pointValue, selected, " />",
        "<label for=", "assessment-"+assessmentIndex, ">", labelText, "</label>"
      ].join("") );
      radioButton.click(updateResult);
      $(listItem).html("");
      $(listItem).prepend(radioButton);
      $(listItem).addClass("answer")
    });
  });


  // display the correct result
  updateResult();

});
