//https://apps.timwhitlock.info/emoji/tables/unicode
var s_name = ["grinning face", "grinning face with smiling eyes", "face with tears of joy", "smiling face with open mouth", "smiling face with open mouth and smiling eyes", "smiling face with open mouth and cold sweat", "smiling face with open mouth and tightly-closed eyes", "smiling face with halo", "smiling face with horns", "winking face", "smiling face with smiling eyes", "face savouring delicious food", "relieved face", "smiling face with heart-shaped eyes", "smiling face with sunglasses", "smirking face", "neutral face", "expressionless face", "unamused face", "face with cold sweat", "pensive face", "confused face", "confounded face", "kissing face", "face throwing a kiss", "kissing face with smiling eyes", "kissing face with closed eyes", "face with stuck-out tongue", "face with stuck-out tongue and winking eye", "face with stuck-out tongue and tightly-closed eyes", "disappointed face", "worried face", "angry face", "pouting face", "crying face", "persevering face", "face with look of triumph", "disappointed but relieved face", "frowning face with open mouth", "anguished face", "fearful face", "weary face", "sleepy face", "tired face", "grimacing face", "loudly crying face", "face with open mouth", "hushed face", "face with open mouth and cold sweat", "face screaming in fear", "astonished face", "flushed face", "sleeping face", "dizzy face", "face without mouth", "face with medical mask", "grinning cat face with smiling eyes", "cat face with tears of joy", "smiling cat face with open mouth", "smiling cat face with heart-shaped eyes", "cat face with wry smile", "kissing cat face with closed eyes", "pouting cat face", "crying cat face", "weary cat face", "face with no good gesture", "face with ok gesture", "person bowing deeply", "see-no-evil monkey", "hear-no-evil monkey", "speak-no-evil monkey", "happy person raising one hand", "person raising both hands in celebration", "person frowning", "person with pouting face", "person with folded hands"];

//place emoticon at position of cursor (rather than always at the end. http://jsfiddle.net/gHN8G/1/)
jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  })
}
});
/////////////////////////////////////////////end insert emoticon at cursor function
$(".smiley-button").click(function() {
  if ($(".smiley-picker").hasClass("hidden")) {
    $(".smiley-picker").fadeIn("fast");
    $(".smiley-picker").toggleClass("hidden");
  } else {
    $(".smiley-picker").fadeOut("fast");
    $(".smiley-picker").toggleClass("hidden");
  }
});
var sm = 0*1;

for (i = 128512; i < 128577; i++) {
    $(".smiley-picker").append("<button type='button' title='"+s_name[sm]+"'  value='&#"+i+"' class='smiley'>&#"+i+"</button>");
	sm = (sm + 1)*1;
}
for (i = 128581; i < 128591; i++) {
    $(".smiley-picker").append("<button type='button' title='"+s_name[sm]+"'  value='&#"+i+"' class='smiley'>&#"+i+"</button>");
	sm = (sm + 1)*1;
}
$(document).ready(function() {
	$(document).on("click",".smiley",function(){
  	//$(".smiley-input").val($('.smiley-input').val()+$(this).text());
	$(".smiley-input").insertAtCaret($(this).text());
  })
})
