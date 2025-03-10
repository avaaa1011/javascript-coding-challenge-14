//task 2: adding support tickets dynamically 
function createSupportTicket(customer, issue, priority)
{
    let divTicketContainer = document.getElementById('ticketContainer'); //support tickets will be added to this main container
    const ticketCard = document.createElement('div'); //creating an element to create a support ticket
    ticketCard.setAttribute('class','ticket-card'); //setting attributes

    const custName = document.createElement('h2'); //a heading for the customer's name
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);

    const issueParagraph = document.createElement('p'); //adding a paragraph to describe the issue for support
    issueParagraph.setAttribute('class', 'issue-description');
    issueParagraph.textContent = issue;
    ticketCard.append(issueParagraph);

    const priorityLabel = document.createElement('p'); //adding a label to show the issue's priority
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    ticketCard.classList.add('other-priority'); //will show with tickets that aren't a priority
    ticketCard.append(priorityLabel); //appending support ticket to ticketContainer

    const resolveBtn = document.createElement('button'); //creates a button that will resolve support tickets when clicked
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn); 
}

//creating example support tickets
document.addEventListener('DOMContentLoaded', function()
{   
    createSupportTicket('Bruce Wayne', 'Cannot access system', 'High');
    createSupportTicket('Dick Grayson', 'Subscription issue', 'Medium');
    highlightHighPriorityTickets();
});
document.getElementById('addTicketBtn').addEventListener('click', () => 
{
    const currentTicket = createSupportTicket('Jason Todd', 'Batsystem Virus', 'High');
    styleSingleCard(currentTicket);
})
