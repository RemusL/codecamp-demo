const EventService = function (UUIDGenerator) {
	const $ = this;
	const events = [{
		title: "KEYNOTE: SOFTWARE CRAFTSMANSHIP",
		author: "SANDRO MANCUSO",
		detail: "AFTER OVER TEN YEARS SINCE THE AGILE SUMMIT, SOFTWARE PROJECTS ARE STILL FAILING AND DEVELOPERS ARE STILL BEHAVING AND BEING TREATED AS FACTORY WORKERS. THE SOFTWARE DEVELOPMENT INDUSTRY IS STILL VERY AMATEUR WHEN COMPARED TO OTHER PROFESSIONS. HOW CAN WE CHANGE THIS? WHY AGILE WAS NOT SUFFICIENT? WHY SO MANY CLIENTS ARE UNHAPPY WITH THEIR SOFTWARE PROJECTS? WHY IS IT SO DIFFICULT TO FIND GOOD DEVELOPERS? OUR INDUSTRY NEEDS MORE PROFESSIONALISM AND THAT’S WHAT SOFTWARE CRAFTSMANSHIP BRINGS TO THE TABLE. IN THIS TALK SANDRO WILL BE EXPLAINING: WHAT SOFTWARE CRAFTSMANSHIP REALLY IS, THE VALUE OF TECHNICAL PRACTICES, WHAT IT MEANS TO BE A PROFESSIONAL SOFTWARE DEVELOPER AND WHAT TO DO TO SATISFY OUR CUSTOMERS.",
		time: "10:00 AM",
		id: "5d354160-d7c5-486d-bac9-70e5a21fd0d9"
	}, {
		title: "Continuous Delivery with GoCD on Modern Infrastructure",
		author: "Remus Langu",
		detail: "A high level overview of ThoughtWorks GoCD and a practical guide in designing continuous delivery workflows for modern infrastructure - Docker + Kubernetes.",
		time: "12:30 PM",
		id: "ade21de2-f9b1-4d85-91e5-98627e9913ec"
	}, {
		title: "Software Architecture in 2018 ",
		author: "Florin Ciubotaru",
		detail: "Like many crafts, software architecture redefines itself in a changing environment. Let's see how we design and build software in the current ecosystems and project dynamics.",
		time: "15:00 PM",
		id: "fdb5c4a3-933d-466b-ad72-9151d12ae975"
	}];

	$.addEvent = function (session) {
		session.id = UUIDGenerator();
		events.push(session);
	};

	$.deleteEvent = function (eventId) {
		const index = $.findIndex(eventId);
		if (index > -1) {
			events.splice(index, 1);
			return true;
		}
		return false;
	};

	$.getAllEvents = function () {
		return events;
	};

	$.getEvent = function (eventId) {
		const index = $.findIndex(eventId);
		if (index !== -1) {
			return events[index];
		}
		return null;
	};

	$.findIndex = function (eventId) {
		return events.findIndex(x => x.id === eventId);
	};

	return $;
};

module.exports = EventService;