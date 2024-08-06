class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
    addAvailableTickets(ticketName, price) {
        const newTicket = new TicketType(ticketName, price);
        this.availableTickets.push(newTicket);
    }
    allTickets(low, high) {
        return"All tickets: " +
        this.availableTickets.map((ticket, index) => `${index + 1}.
        ${ticket.ticketName} ($${ticket.price})`).join(" ");
    }
    searchTickets(low, high) {
        const eligibleTickets = this.availableTickets.filter(ticket => ticket.price >= low &&
            ticket.price <= high);
        if (eligibleTickets.length === 0) {
            return "No tickets available"
        }
        return "Eligible tickets: " + eligibleTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(" ");
    }
}

const eventObj1 = new Event(
    'Touche Amore & Soul Glo',
    'Nobodys'
);

const eventObj2 =  new Event(
    'Thursday',
    'War All the Time 20th Anniversary tour'
);

const eventObj3 =  new Event(
    'Soft Kill, Cold Cave, Choir Boy, & Black Marble, ',
    'Cold, Dark World Tour'
);

class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const eventArray = new Array();

eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray);

// document.addEventListener('DOMContentLoaded', () => {
//     let html = '';
//     eventArray.forEach((item) => {
//         html += `<li>${item.name} - ${item.description}`;
//     });
//     document.querySelector("#event").innerHTML = html;
// });

// document.addEventListener('DOMContentLoaded', () => {
//         let html = '';
//         eventArray.forEach((event) => {
//             html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
//         });
//         document.querySelector('#event').innerHTML = html;
//       });

document.addEventListener('DOMContentLoaded', () => {
        let html = '';
        eventArray.forEach((event) => {
            html += `<li> ${event.name} - ${event.description} - ${event.searchTickets(0, 100)}</li>`
        });
        document.querySelector('#event').innerHTML = html;
    });

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

console.log("Test case 1:", eventObj3.searchTickets(0,250));
