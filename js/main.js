$(document).ready(function() {


//PageScroll2Id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

// jQuery Validate JS
	$('#contact-form').validate({
		rules: {
			name: {required: true},
			email: {required: true, email: true},
			message: {required: true}
		},

		messages: {
			name: "Enter your full name",
			email: {
				required: "Enter your email",
				email: "Enter a valid email address",
			},
			message: "Enter your message",
		}
	});

});