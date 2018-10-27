var assert = require('assert');
const request = require("request");
const server = require("../server.js");

const base_url = "http://localhost:8080"

describe("Event", function () {
	after(function () {
		server.shutdown();
	});

	it("should create a session", function (done) {
		request.post(`${base_url}/codecamp-board/api/session`, {
			title: "Foo",
			author: "Me",
			detail: "Bar",
			time: "15:30 PM",
		}, function (error, response) {
			assert.equal(response.statusCode, 200);
			done();
		}, 1);
	});

	it("should get all session", function (done) {
		request(`${base_url}/codecamp-board/api/events`, function (error, response, body) {
			const responseJSON = JSON.parse(body);
			assert.equal(responseJSON.length, 4);
			done();
		}, 1);
	});
});