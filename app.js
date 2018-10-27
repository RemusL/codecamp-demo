const eventService = {
	el: '#events',

	data: {
		session: {title: '', author: '', detail: '', time: ''},
		events: []
	},

	ready: function () {
		this.fetchEvents();
	},

	methods: {

		fetchEvents: function () {
			var events = [];
			this.$http.get('/codecamp-board/api/events')
				.success(function (events) {
					this.$set('events', events);
				})
				.error(function (err) {
					console.log(err);
				});
		},

		addEvent: function (e) {
			if (this.session.title.trim()) {
				this.$http.post('/codecamp-board/api/session', this.session)
					.success(function (res) {
						this.events.push({
							id: this.session.id,
							title: this.session.title,
							author: this.session.author,
							detail: this.session.detail,
							time: this.session.time
						});
						$(".form-control").val('');
						$('#add-session-modal').modal('hide');
					})
					.error(function (err) {
						console.log(err);
					});
			}
		},

		deleteEvent: function (id) {
			if (confirm('Are you sure you want to delete this session?')) {
				this.$http.delete('/codecamp-board/api/session/' + id)
					.success(function (res) {
						var index = this.events.findIndex(x => x.id === id);
						this.events.splice(index, 1);
					})
					.error(function (err) {
						console.log(err);
					});
			}
		}
	}
};
new Vue(eventService);